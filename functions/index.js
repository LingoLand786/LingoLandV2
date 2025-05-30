const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const admin = require('firebase-admin');
admin.initializeApp();

sgMail.setApiKey(functions.config().sendgrid.key);

exports.sendVerificationEmail = functions.https.onCall(async (data, context) => {
  const { email, code } = data;
  const msg = {
    to: email,
    from: 'your_verified_sender@example.com', // Replace with your verified sender in SendGrid
    subject: 'Seu código de verificação',
    text: `Seu código de verificação é: ${code}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Bem-vindo ao AppSiteSync!</h2>
        <p>Seu código de verificação é:</p>
        <h1 style="color: #002D62;">${code}</h1>
        <p>Este código expira em 10 minutos.</p>
      </div>
    `,
  };
  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('SendGrid error:', error);
    throw new functions.https.HttpsError('internal', 'Failed to send email');
  }
});
