var components = {
    "packages": [
        {
            "name": "angularjs",
            "main": "angularjs-built.js"
        },
        {
            "name": "jquery",
            "main": "jquery-built.js"
        },
        {
            "name": "underscore",
            "main": "underscore-built.js"
        },
        {
            "name": "bootstrap",
            "location": "../../vendor/twitter/bootstrap/js"
        }
    ],
    "shim": {
        "underscore": {
            "exports": "_"
        },
        "bootstrap/collapse": {
            "deps": [
                "bootstrap/transition"
            ]
        }
    },
    "baseUrl": "scripts/components",
    "paths": {
        "scripts": ".."
    }
};
if (typeof require !== "undefined" && require.config) {
    require.config(components);
} else {
    var require = components;
}
if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = components;
}