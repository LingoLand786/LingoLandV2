const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "appsitesync.firebasestorage.app"
});

// Set up Storage rules
const storageRules = `
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /practice/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
`;

// Set up Firestore rules
const firestoreRules = `
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /practice_drawings/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
`;

// CORS configuration for Firebase Storage
const corsConfig = [
  {
    "origin": ["*"],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type", "Access-Control-Allow-Origin"]
  }
];

// Function to update Storage rules
async function updateStorageRules() {
  try {
    await admin.securityRules().releaseStorageRulesetFromSource(storageRules);
    console.log('Storage rules updated successfully!');
  } catch (error) {
    console.error('Error updating Storage rules:', error);
  }
}

// Function to update Firestore rules
async function updateFirestoreRules() {
  try {
    await admin.securityRules().releaseFirestoreRulesetFromSource(firestoreRules);
    console.log('Firestore rules updated successfully!');
  } catch (error) {
    console.error('Error updating Firestore rules:', error);
  }
}

// Function to set CORS configuration
async function setCorsConfiguration() {
  try {
    const bucket = admin.storage().bucket();
    await bucket.setCorsConfiguration(corsConfig);
    console.log('CORS configuration updated successfully!');
  } catch (error) {
    console.error('Error setting CORS configuration:', error);
  }
}

// Run all updates
async function setupRules() {
  console.log('Setting up Firebase rules...');
  await updateStorageRules();
  await updateFirestoreRules();
  await setCorsConfiguration();
  console.log('All rules and configurations have been set up!');
}

setupRules(); 