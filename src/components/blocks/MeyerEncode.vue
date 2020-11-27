<template>
    <section class="component-blocks meyerencode form-layout-basic">
        <h2>
            URL Encode & Decode
        </h2>

        <div class="field-elements">
            <textarea v-model="states.elements" />
        </div>

        <div class="form-actions">
            <div class="field-elements">
                <button @click.prevent="onEncode">Encode</button>
            </div>

            <div class="field-elements">
                <button @click.prevent="onDecode">Decode</button>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive } from 'vue'

import { meyer } from '@/misc/utilities.js'

export default {
    name: 'MeyerEncode',
    setup: function() {
        const states = reactive({
            elements: '',
        })

        const onEncode = () => {
            states.elements = meyer.encode(states.elements)
        }
        const onDecode = () => {
            states.elements = meyer.decode(states.elements)
        }

        return { states, onEncode, onDecode }
    },
}
</script>

<style scoped>
.meyerencode {
    width: 500px;
    max-width: 100%;

    color: #fff;
}
</style>
