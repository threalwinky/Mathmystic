module.exports = {
    resolve:{
        fallback: { "http": require.resolve("stream-http") },
        fallback: { "path": require.resolve("path-browserify") }
    }
}