import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: "404.html",
        }),
        paths: {
            base: dev ? "" : process.env.BASE_PATH,
        },
    },
};

export default config;
