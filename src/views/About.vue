<template>
    <LayoutDefault>
        <template #content>
            <Navigation />

            <h1>About</h1>
        </template>
    </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/components/layouts/Default.vue'

import Navigation from '@/components/blocks/Navigation.vue'

export default {
    name: 'About',
    components: {
        LayoutDefault,
        Navigation,
    },
}
</script>
