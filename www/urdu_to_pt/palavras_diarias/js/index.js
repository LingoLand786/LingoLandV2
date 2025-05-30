/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Adicione a configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAfICxStkTUF3GVdKTlHZTHTJ47XIbath8",
    authDomain: "appsitesync.firebaseapp.com",
    projectId: "appsitesync",
    storageBucket: "appsitesync.firebasestorage.app",
    messagingSenderId: "357510439971",
    appId: "1:357510439971:web:670c5fd57222ae3d2cbd96",
    measurementId: "G-T0SX0NH50K"
};
// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    // Adicione o listener para o formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Usuário logado:', user);
        
        // Redireciona para a página principal após o login
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Erro no login:', error);
        errorMessage.textContent = 'Email ou senha inválidos';
    }
}

function redirectToLogin() {
    window.location.href = "Login.html";
}
