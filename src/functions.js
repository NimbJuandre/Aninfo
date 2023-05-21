export default {
    camalize(str) {
        if (!str)
            return '';

        return str.replace(/(\w)(\w*)/g,
            function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); });
    },
    debounce(fn, wait) {
        let timer;
        return function (...args) {
            if (timer) {
                clearTimeout(timer); // clear any pre-existing timer
            }
            const context = this; // get the current context
            timer = setTimeout(() => {
                fn.apply(context, args); // call the function if time expires
            }, wait);
        }
    }
}