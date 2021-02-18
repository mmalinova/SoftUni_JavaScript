function solve() {
    let extensible = {};

    extensible.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if (typeof value === 'function') {
                let proto = Object.getPrototypeOf(extensible);
                proto[key] = value;
            } else {
                extensible[key] = value;
            }
        });
    };

    return extensible;
}