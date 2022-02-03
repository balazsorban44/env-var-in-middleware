import customPackage from "my-custom-package"
export default function middleware(_req) {
  return new Response(
    JSON.stringify({
      string: "a constant string",
      hello: process.env.ENV_VAR_USED_IN_MIDDLEWARE,
      customPackage: customPackage(),
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}
