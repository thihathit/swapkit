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
    </section>
</template>

<script>
import { reactive } from 'vue'

import MeyerEncode from '@/components/blocks/MeyerEncode.vue'
import PxToEm from '@/components/blocks/PxToEm.vue'
import Modal from '@/components/blocks/Modal.vue'

export default {
    name: 'Swappers',
    components: {
        MeyerEncode,
        PxToEm,
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
</style>
