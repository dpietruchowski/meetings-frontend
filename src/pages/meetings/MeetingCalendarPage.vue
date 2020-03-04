<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1>Kalendarz</h1>
        </div>
        <calendar></calendar>
    </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue'
export default {
    components: {
        'calendar': Calendar
    },
}
</script>