if ('serviceWorker' in navigator){  
  navigator.serviceWorker.register('./sw.js').then((reg) => {
    console.log('There is a service worker regestered. Check it out: ', reg);
  }).catch((error) => {
    console.log('Register a service worker went wrong: ', error);
  });
}