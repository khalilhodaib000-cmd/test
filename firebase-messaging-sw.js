importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC7IuqZfeJiBBD2KlH0Y1YFGRKQVE7Xrx4",
  authDomain: "test-f4f89.firebaseapp.com",
  projectId: "test-f4f89",
  storageBucket: "test-f4f89.firebasestorage.app",
  messagingSenderId: "933874949137",
  appId: "1:933874949137:web:0516c64d7496ab45fda5b0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});