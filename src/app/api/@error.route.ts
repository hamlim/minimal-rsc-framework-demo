// Called if any route under `/api` throws an error
// and doesn't respond with a valid Response object

export default async function ErrorRoute(request: Request) {
  return new Response("Server Error", { status: 500 });
}
