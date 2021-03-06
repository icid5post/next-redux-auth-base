const { default: AbortController } = require("abort-controller");
const { default: fetch, Headers, Request, Response } = require("node-fetch");

Object.assign(globalThis, {
    fetch,
    Headers,
    Request,
    Response,
    AbortController,
});
const { wrapper } = require("../store/store");

export function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
export default wrapper.withRedux(App);