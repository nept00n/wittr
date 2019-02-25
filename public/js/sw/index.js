self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) {
      if (response.status === 404) {
        // TODO: instead, respond with the gif at
        return fetch('/imgs/dr-evil.gif').then(function(response) {
          if (response.status === 404) {
            return new Response("Whoops, not found");
          }
          return response;
        }).catch(function() {
          console.log('you fucked up');
        });
      }
      return response;
    }).catch(function() {
      return new Response("Uh oh, that totally failed!");
    })
  );
});
