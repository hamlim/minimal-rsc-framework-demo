import { setCookie } from "some-framework/cookie";
import { getStore } from "some-framework/store";

export default async function IndexPage() {
  let store = getStore();

  // Raw access to the request object and it's properties:
  let url = store.request.url;

  // optionally set status code
  store.context.status(200);

  // optionally set response headers
  store.response.headers.set("x-custom-header", "some-value");

  // optionally set cookies!
  setCookie("some-cookie", "some-value");

  return (
    // No `_layout.tsx` concepts - baked into page handlers
    // can be extracted to a shared component if folk wanted
    <html lang="en">
      <head>
        <title>Minimal RSC Framework Demo</title>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
  );
}
