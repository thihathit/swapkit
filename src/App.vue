<template>
    <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: scale(1.1);
}
</style>
