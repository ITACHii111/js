// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named iife
    console.log("DB connected")
})();

((name) => {
    // simple iife or unnamend iife
    console.log(`DB conected Two ${name}`);
})("tarun")