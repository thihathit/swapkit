<template>
  <section class="component-blocks swappers">
    <!-- Meyer encoder -->
    <button @click.prevent="onSwitch('meyerencode')">
      Meyer URL Encoder & Decoder
    </button>

    <teleport to="body">
      <Modal :show="isSwitch('meyerencode')" :onBlur="() => onSwitch(null)">
        <MeyerEncode />
      </Modal>
    </teleport>
    <!-- Meyer encoder -->

    <!-- PX to EM -->
    <button @click.prevent="onSwitch('px2em')">PX to EM</button>

    <teleport to="body">
      <Modal :show="isSwitch('px2em')" :onBlur="() => onSwitch(null)">
        <PxToEm />
      </Modal>
    </teleport>
    <!-- PX to EM -->

    <!-- HTML to JSX -->
    <button @click.prevent="onSwitch('html2jsx')">HTML to JSX</button>

    <teleport to="body">
      <Modal :show="isSwitch('html2jsx')" :onBlur="() => onSwitch(null)">
        <HtmlToJsx />
      </Modal>
    </teleport>
    <!-- HTML to JSX -->

    <!-- Minify -->
    <button @click.prevent="onSwitch('minify')">Minify HTML / CSS / JS</button>

    <teleport to="body">
      <Modal :show="isSwitch('minify')" :onBlur="() => onSwitch(null)">
        <Minify />
      </Modal>
    </teleport>
    <!-- HTML to JSX -->
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import MeyerEncode from '$components/blocks/MeyerEncode.vue'
import HtmlToJsx from '$components/blocks/HtmlToJsx.vue'
import Minify from '$components/blocks/Minify.vue'
import PxToEm from '$components/blocks/PxToEm.vue'
import Modal from '$components/blocks/Modal.vue'

type TypeStates = {
  active_type: 'meyerencode' | 'px2em' | 'html2jsx' | 'minify' | null
}

const state = reactive<TypeStates>({
  active_type: null
})

const onSwitch = (type: TypeStates['active_type']) => {
  state.active_type = type
}

const isSwitch = (type: TypeStates['active_type']) => {
  return state.active_type == type
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

button {
  appearance: none;
  background: none;
  border: none;

  cursor: pointer;
  color: #fff;
  background-color: #5522e6;
  padding: 8px 10px;
  font-size: 0.8em;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

  transition: 0.3s background-color;
}
button:hover {
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
