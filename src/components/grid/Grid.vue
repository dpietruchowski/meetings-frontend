<template>
    <div class="grid">
        <slot></slot>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-gap: 5px;
}
</style>