<template>
    <button type="button" class="btn btn-sm btn-outline-secondary" @click="clicked">
        <slot></slot>
    </button>
</template>

<script>
export default {
    methods: {
        clicked() {
            this.$emit('clicked');
        }
    }
}
</script>