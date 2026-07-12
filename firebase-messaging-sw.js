importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAetQLNfeS69hofKicFsN_BeaqslnL9Ows",
  projectId: "sms123-454d3",
  messagingSenderId: "607529107448",
  appId: "1:607529107448:web:7ae2547a16af919cc5a00d"
});

const messaging = firebase.messaging();

// Obsługa wyświetlania powiadomienia
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});