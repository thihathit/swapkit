<template>
    <section class="component-blocks swappers">
        <!-- Meyer encoder -->
        <div class="type-controls" @click.prevent="onSwitch('meyerencode')">
            Meyer URL Encoder & Decoder
        </div>

        <teleport to="body">
            <Modal
                :show="isSwitch('meyerencode')"
                :onBlur="() => onSwitch(null)"
            >
                <MeyerEncode />
            </Modal>
        </teleport>
        <!-- Meyer encoder -->

        <!-- PX to EM -->
        <div class="type-controls" @click.prevent="onSwitch('px2em')">
            PX to EM
        </div>

        <teleport to="body">
            <Modal :show="isSwitch('px2em')" :onBlur="() => onSwitch(null)">
                <PxToEm />
            </Modal>
        </teleport>
        <!-- PX to EM -->

        <!-- HTML to JSX -->
        <div class="type-controls" @click.prevent="onSwitch('html2jsx')">
            HTML to JSX
        </div>

        <teleport to="body">
            <Modal :show="isSwitch('html2jsx')" :onBlur="() => onSwitch(null)">
                <HtmlToJsx />
            </Modal>
        </teleport>
        <!-- HTML to JSX -->

        <!-- Minify -->
        <div class="type-controls" @click.prevent="onSwitch('minify')">
            Minify HTML / CSS / JS
        </div>

        <teleport to="body">
            <Modal :show="isSwitch('minify')" :onBlur="() => onSwitch(null)">
                <Minify />
            </Modal>
        </teleport>
        <!-- HTML to JSX -->
    </section>
</template>

<script>
import { reactive } from 'vue'

import MeyerEncode from '@/components/blocks/MeyerEncode.vue'
import HtmlToJsx from '@/components/blocks/HtmlToJsx.vue'
import Minify from '@/components/blocks/Minify.vue'
import PxToEm from '@/components/blocks/PxToEm.vue'
import Modal from '@/components/blocks/Modal.vue'

export default {
    name: 'Swappers',
    components: {
        MeyerEncode,
        PxToEm,
        HtmlToJsx,
        Minify,
        Modal,
    },
    setup: function() {
        const state = reactive({
            active_type: null,
        })

        const onSwitch = active_type => {
            state.active_type = active_type
        }

        const isSwitch = active_type => {
            return state.active_type == active_type
        }

        return { state, onSwitch, isSwitch }
    },
}
</script>

<style scoped>
.swappers {
    max-width: 800px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
}

.type-controls {
    cursor: pointer;
    color: #fff;
    background-color: #5522e6;
    padding: 8px 10px;
    font-size: 0.8em;
    border-radius: 3px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

    transition: 0.3s background-color;
}
.type-controls:hover {
    background-color: #42b983;
}

@media only screen and (max-width: 800px) {
    .swappers {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media only screen and (max-width: 550px) {
    .swappers {
        grid-template-columns: 100%;
    }
}
</style>
