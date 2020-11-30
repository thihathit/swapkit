<template>
    <section class="component-blocks minify form-layout-basic">
        <h2>
            Minify
        </h2>

        <div class="wrapper form-layout-basic">
            <div>
                <div class="form-layout-basic">
                    <h3>HTML</h3>

                    <div class="field-elements">
                        <textarea v-model="states.html" />
                    </div>

                    <div class="form-actions">
                        <div class="field-elements">
                            <button @click.prevent="minifyHtml">
                                Minify HTML
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="form-layout-basic">
                    <h3>CSS</h3>

                    <div class="field-elements">
                        <textarea v-model="states.css" />
                    </div>

                    <div class="form-actions">
                        <div class="field-elements">
                            <button @click.prevent="minifyCss">
                                Minify CSS
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="form-layout-basic">
                    <h3>Javascript</h3>

                    <div class="field-elements">
                        <textarea v-model="states.js" />
                    </div>

                    <div class="form-actions">
                        <div class="field-elements">
                            <button @click.prevent="minifyJs">
                                Minify JS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive } from 'vue'
import cssMinify from 'clean-css'
import { minify as jsMinify } from 'terser'
import { minify as htmlMinify } from 'html-minifier-terser'

import { fixHtml } from '@/misc/utilities.js'

export default {
    name: 'Minify',
    setup: function() {
        const states = reactive({
            html: '',
            css: '',
            js: '',
        })

        const minifyHtml = () => {
            states.html = htmlMinify(fixHtml(states.html), {
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true,
                sortAttributes: true,
                sortClassName: true,
                useShortDoctype: true,
            })
        }

        const minifyCss = () => {
            const result = new cssMinify({}).minify(states.css)

            if (result.styles) states.css = result.styles
        }

        const minifyJs = async () => {
            const result = await jsMinify(states.js)
                .then(res => res.code)
                .catch(err => err.message)

            states.js = result
        }

        return { states, minifyHtml, minifyCss, minifyJs }
    },
}
</script>

<style scoped>
.minify {
    width: 1200px;
    max-width: 100%;

    color: #fff;
}

.wrapper {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}
.wrapper > * {
    width: 100%;
}

textarea {
    height: 300px;
}

@media only screen and (max-width: 1200px) {
    .wrapper {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media only screen and (max-width: 800px) {
    .wrapper {
        grid-template-columns: 100%;
    }
}
</style>
