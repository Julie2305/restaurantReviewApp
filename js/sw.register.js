if (!navigator.serviceWorker) return;

navigator.serviceWorker.register('/sw.js').then((reg) => {
  console.log('There is a service worker regestered. Check it out: ', reg.scop);
}).catch((error) => {
  console.log('Register a service worker went wrong: ', error);
});