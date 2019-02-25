self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  var request = event.request;
  if (/\.jpg$/.test(request.url)) {
    event.respondWith(
      fetch('/imgs/dr-evil.gif')
    );
  }
});
