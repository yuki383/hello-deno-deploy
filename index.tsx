import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

console.log("Listening on http://localhost:8000");


await serve((_req) => {
  const html = `<html>
      <head>
        <title>Hello Deno Deploy</title>
      </head>
    <body>
      <h1>Hello Deno Deploy &#x1f995;</h1>
    </body>
    </html>`;

  return new Response(html, {
    headers: { "content-type": "text/html;charset=utf=8" }
  })
})
