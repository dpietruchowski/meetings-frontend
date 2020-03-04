<template>
    <dtable class="border border-secondary">
        <dtable-row>
            <dtable-cell class ="border border-secondary" v-for="col in nCols" :key="col" :clickable="false">{{ days[col - 1] | shortcut }}</dtable-cell>
        </dtable-row>
        <dtable-row v-for="row in nRows" :key="row">
            <dtable-cell class ="border border-secondary" v-for="col in nCols" :key="col" @clicked="goToDay(row, col)">
                <div>{{ day(row, col) }}</div>
            </dtable-cell>
        </dtable-row>
    </dtable>
</template>

<script>
import CalendarLogic from "@/logic/CalendarLogic"
export default {
    extends: CalendarLogic,
    methods: {
        goToDay(row, col) {
            var day = this.day(row, col);
            var month = this.date.getMonth();
            var year = this.date.getFullYear();
            this.$router.push({ name: 'MeetingCalendarDailyPage', params: { year: year, month: month, day: day } });
        }
    }
}
</script>