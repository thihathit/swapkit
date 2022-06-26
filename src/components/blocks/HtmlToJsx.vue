<template>
  <section class="component-blocks htmltojsx">
    <h2>HTML to JSX</h2>

    <div class="wrapper">
      <div class="field-elements code-field">
        <label class="field-labels">HTML</label>

        <textarea v-model="states.code" />
      </div>

      <div class="field-elements output-field">
        <label class="field-labels">JSX</label>

        <code>
          <pre>{{ output }}</pre>
        </code>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

import Html2jsx from 'htmltojsx-too'

import { fixHtml } from '$misc/utilities.js'

const states = reactive({
  code: ''
})

const output = computed(() => {
  const converter = new Html2jsx({
    createClass: false
  })

  const code = fixHtml(states.code)

  const result = converter.convert(code)

  return result
})
</script>

<style scoped>
.htmltojsx {
  width: 1200px;
  max-width: 100%;

  color: #fff;
}

.wrapper {
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;
}
.wrapper > * {
  width: 100%;
}

.code-field textarea {
  height: 400px;
}

.output-field {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr;
}
.output-field code {
  max-width: 100%;
  overflow: auto;
  min-height: 100px;
}

@media only screen and (max-width: 600px) {
  .wrapper {
    grid-template-columns: 100%;
  }
}
</style>
