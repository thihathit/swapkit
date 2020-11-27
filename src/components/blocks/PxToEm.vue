<template>
    <section class="component-blocks pxtoem form-layout-basic">
        <h2>
            PX to EM
        </h2>

        <div class="form-layout-basic convertor-fields">
            <div class="field-elements">
                <label class="field-labels">Default 1 EM</label>

                <div class="has-element-suffix">
                    <input
                        type="number"
                        v-model="states.relation"
                        @input="toBoth"
                    />

                    <div>px</div>
                </div>
            </div>

            <div class="field-elements">
                <label class="field-labels">To PX</label>

                <div class="has-element-suffix">
                    <input
                        type="number"
                        step="any"
                        v-model="states.px"
                        @input="toEM"
                    />

                    <div>px</div>
                </div>
            </div>

            <div class="field-elements">
                <label class="field-labels">To EM</label>

                <div class="has-element-suffix">
                    <input
                        type="number"
                        step="any"
                        v-model="states.em"
                        @input="toPX"
                    />

                    <div>em</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive } from 'vue'

import { pxToEm } from '@/misc/utilities.js'

export default {
    name: 'PxToEm',
    setup: function() {
        const defaultRelation = 16
        const defaultPx = 0

        const states = reactive({
            relation: defaultRelation,
            px: defaultPx,
            em: pxToEm({
                relation: defaultRelation,
                px: defaultPx,
            }),
        })

        const toPX = () => {
            states.px = pxToEm({
                relation: states.relation,
                em: states.em,
            })
        }
        const toEM = () => {
            states.em = pxToEm({
                relation: states.relation,
                px: states.px,
            })
        }
        const toBoth = () => {
            toPX()
            toEM()
        }

        return { states, toPX, toEM, toBoth }
    },
}
</script>

<style scoped>
.pxtoem {
    width: 600px;
    max-width: 100%;

    color: #fff;
}

.convertor-fields {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}

@media only screen and (max-width: 600px) {
    .convertor-fields {
        grid-template-columns: 100%;
        grid-gap: 10px;
    }
}
</style>
