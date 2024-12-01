// "Plain old request handler"
// Accepts the raw Request object
// Returns a Response object
export default async function AddRoute(request: Request) {
  // curl -X POST http://localhost:3000/api/add -H "Content-Type: application/json" -d '{"a": 1, "b": 2}'
  // => {"result":3}
  let params = await request.json();

  return new Response(JSON.stringify({ result: params.a + params.b }));
}
