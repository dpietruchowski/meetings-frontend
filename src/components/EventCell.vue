<template>
    <div class="border border-secondary rounded bg">
        {{ event.id }}
    </div>
</template>

<script>
export default {
    props: {
        event: Object
    },
}
</script>

<style scoped>
.bg {
    height: 100%;
    background: rgba(76, 175, 80, 0.3)
}
</style>