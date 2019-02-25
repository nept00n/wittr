self.addEventListener('fetch', function(event) {
	// TODO: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
  const strong = '<strong class="a-winner-is-me">Hiya partner</strong>';
  event.respondWith(
    new Response(strong, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    })
  );
});
