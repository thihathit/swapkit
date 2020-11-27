<template>
    <transition name="modal-fade">
        <div
            v-if="show"
            class="modals"
            ref="modal"
            :style="modalStyle"
            @click.self.prevent="onModalClick"
        >
            <div class="inner" @click.self.prevent="onModalClick">
                <div class="wrapper" ref="wrapper" :style="wrapperStyle">
                    <div class="content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.modals {
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;

    overflow: auto;
    display: grid;
    grid-template-columns: minmax(0, auto);
    justify-content: center;
    align-items: center;
}

.modal-fade-leave-active,
.modal-fade-enter-active {
    transition: opacity 0.3s;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.inner {
    padding: 50px 15px;
    max-width: 100%;
}
.wrapper {
    border-radius: 5px;
    overflow: hidden;
    padding: 20px;
}
</style>

<script>
import { computed } from 'vue'

export default {
    name: 'Modal',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        modalBackgroundColor: {
            type: String,
            default: 'rgba(0,0,0, 0.9)',
        },
        wrapperBackgroundColor: {
            type: String,
            default: '#5522E6',
        },
        wrapperBoxShadow: {
            type: String,
            default: '0 3px 8px rgba(0,0,0, 0.1)',
        },
        onBlur: {
            type: Function,
            default: function() {},
        },
    },
    setup: function(props) {
        const modalStyle = computed(() => ({
            'background-color': props.modalBackgroundColor,
        }))
        const wrapperStyle = computed(() => ({
            'background-color': props.wrapperBackgroundColor,
            'box-shadow': props.wrapperBoxShadow,
        }))

        const onModalClick = () => {
            if (props.onBlur) {
                return props.onBlur()
            }
        }

        return { modalStyle, wrapperStyle, onModalClick }
    },
}
</script>
