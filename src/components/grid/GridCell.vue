<template>
    <div :style="gridStyles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        row: Number,
        col: Number,
        rowspan: {
            type: Number,
            default: 1
        },
        colspan: {
            type: Number,
            default: 1
        }
    },
    computed: {
        gridStyles() {
            console.log("we" + this.rowspan)
            return {
                'grid-row-start': this.row,
                'grid-row-end': this.row + this.rowspan,
                'grid-column-start': this.col,
                'grid-column-end': this.col + this.colspan
            }
        }
    }
}
</script>