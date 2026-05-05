export default {
  async fetch(request, env, ctx) {
    return handleRequest(request);
  },
};

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    return new Response("Worker is running 🚀", {
      headers: { "content-type": "text/plain" },
    });
  }

  if (url.pathname === "/health") {
    return new Response(JSON.stringify({ status: "ok" }), {
      headers: { "content-type": "application/json" },
    });
  }

  if (url.pathname === "/time") {
    return new Response(
      JSON.stringify({ time: new Date().toISOString() }),
      {
        headers: { "content-type": "application/json" },
      }
    );
  }

  return new Response("Not Found", { status: 404 });
}
