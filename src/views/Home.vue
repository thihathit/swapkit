<template>
    <LayoutDefault>
        <template #content>
            <Swappers />
        </template>
    </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/components/layouts/Default.vue'

import Swappers from '@/components/blocks/Swappers.vue'

export default {
    name: 'Home',
    components: {
        LayoutDefault,
        Swappers,
    },
}
</script>

<style scoped>
.layouts {
    justify-content: center;
}

.swappers {
    padding: 15px 0;
}
</style>
