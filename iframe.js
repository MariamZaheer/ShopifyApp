<script type='text/javascript'>
  // If the current window is the 'parent', change the URL by setting location.href
//   if (window.top == window.self) {
//     window.top.location.href = "http://prometheus-asgard.myshopify.com/admin/oauth"
//     // "/auth/shopify?shop=myshopname";

//   // If the current window is the 'child', change the parent's URL with postMessage
//   } else {
//     message = JSON.stringify({
//       message: "Shopify.API.remoteRedirect",
//       data: { location: window.location.origin + "http://prometheus-asgard.myshopify.com/admin/oauth" }
//         // "/auth/shopify?shop=myshopname" }
//     });
//     window.parent.postMessage(message, "https://prometheus-asgard.myshopify.com"):
//       // "https://myshopname.myshopify.com");
//   }
  response.headers["X-Frame-Options"] = "ALLOW-FROM https://#{shop}"
</script>