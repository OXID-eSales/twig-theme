module.exports = {

    theme: {
        files: {
            "out/twig/src/js/scripts.min.js": [
                "build/vendor/bootstrap/js/bootstrap.js",
                "build/vendor/bootstrap-select/js/bootstrap-select.js",
                "build/vendor/jquery-bootstrap-validation/js/jqBootstrapValidation.js",
                "build/vendor/jquery-unveil/js/jquery.unveil.js",
                "build/js/main.js"
            ],
            "out/twig/src/js/pages/compare.min.js": "build/js/pages/compare.js",
            "out/twig/src/js/pages/details.min.js": "build/js/pages/details.js",
            "out/twig/src/js/pages/review.min.js":  "build/js/pages/review.js",
            "out/twig/src/js/pages/start.min.js":   "build/js/pages/start.js"
        }
    },

    vendor: {
        files: {
            "out/twig/src/js/libs/jquery.min.js":                ["build/vendor/jquery/js/jquery.js", "build/js/jquery/patch.js"],
            "out/twig/src/js/libs/jquery.cookie.min.js":         "build/vendor/jquery-cookie/js/jquery.cookie.js",
            "out/twig/src/js/libs/jquery.flexslider.min.js":     "build/vendor/jquery-flexslider2/js/jquery.flexslider.js",
            "out/twig/src/js/libs/jquery-ui.min.js":             "build/vendor/jquery-ui/js/jquery-ui.js",
            "out/twig/src/js/libs/jqBootstrapValidation.min.js": "build/vendor/jquery-bootstrap-validation/js/jqBootstrapValidation.js",
            "out/twig/src/js/libs/photoswipe.min.js":            "build/vendor/photoswipe/js/photoswipe.js",
            "out/twig/src/js/libs/photoswipe-ui-default.min.js": "build/vendor/photoswipe/js/photoswipe-ui-default.js"
        }
    },

    widgets: {
        files: [
            {
                expand: true,
                src:    "*.js",
                cwd:    "build/vendor/oxid-esales/js/",
                dest:   "out/twig/src/js/widgets/",
                ext:    ".min.js",
                extDot: "last"
            }
        ]
    }

};
