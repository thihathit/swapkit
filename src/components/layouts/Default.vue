<template>
    <div class="layouts layout-default">
        <header id="header" v-if="$slots.header">
            <slot name="header" />
        </header>

        <section id="highlight" v-if="$slots.highlight">
            <slot name="highlight" />
        </section>

        <main id="content" v-if="$slots.content || $slots.default">
            <slot name="content" />
            <slot />
        </main>

        <section id="lowlight" v-if="$slots.lowlight">
            <slot name="lowlight" />
        </section>

        <footer id="footer" v-if="$slots.footer">
            <slot name="footer" />
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Default',
}
</script>

<style scoped>
:global(body) {
    overflow-x: hidden;
}
:global(#app) {
    height: 100%;
}

.layouts {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}
.layouts > * {
    width: 100%;
}

main {
    max-width: 1130px;
    padding-left: 15px;
    padding-right: 15px;

    margin: 0 auto;
}

footer {
    overflow: hidden;
    margin-top: auto;
}
</style>
