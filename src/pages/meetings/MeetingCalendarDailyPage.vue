<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1>Dzień {{ hours[0] | toDateStr }}</h1>
        </div>
        <grid>
            <div class="block">
                <grid-cell v-for="room in rooms" :key="rooms.indexOf(room) + 111" :row="1" :col="rooms.indexOf(room) + 2">
                    <div>{{ room.name }}</div>
                </grid-cell>
            </div>
            <div class="block">
                <grid-cell v-for="hour in hours" :key="hours.indexOf(hour)" :row="hours.indexOf(hour) + 2" :col="1" :colspan="rooms.length + 1">
                    <div class="border-bottom border_secondary h-100"></div>
                </grid-cell>
            </div>
            <div class="block">
                <grid-cell v-for="hour in hours" :key="hours.indexOf(hour)" :row="hours.indexOf(hour) + 2" :col="1">
                    <div class="btn">{{ hour.toLocaleTimeString() }}</div>
                </grid-cell>
            </div>
            <div class="block">
                <grid-cell v-for="event in events" :key="event.id - 5" :row="row(event)" :rowspan="rowspan(event)" :col="col(event) + 2">
                    <div class="btn border border-secondary rounded h-100 event w-100" @click="goToEvent(event)">
                    {{ event.id }} sdfd
                    </div>
                </grid-cell>
            </div>

        </grid>
    </div>
</template>

<script>
import CalendarLogic from "@/logic/CalendarLogic"
export default {
    extends: CalendarLogic,
    props: {
        step: {type: Number, default: 30},
        from: {type: Number, default: 8},
        to: {type: Number, default: 18},
    },
    data() {
        return {
            events: [
                {id: 0, startTime: "07:00", endTime: "11:00", roomId: 0},
                {id: 1, startTime: "09:10", endTime: "11:00", roomId: 1},
                {id: 2, startTime: "13:00", endTime: "17:00", roomId: 3},
                {id: 3, startTime: "09:00", endTime: "15:00", roomId: 2},
                {id: 4, startTime: "09:00", endTime: "13:00", roomId: 1},
            ],
            rooms: [
                {id: 0, name: "Jowisz"},
                {id: 1, name: "Neptun"},
                {id: 2, name: "Uran"},
                {id: 3, name: "Ziemia"},
            ]
        }
    },
    computed: {
        hours() {
            return this.hoursFromTo(this.from, this.to, this.step);
        }
    },
    methods: {
        onClick(hour){
            this.$router.push({name: 'MeetingPageNew', params: { initDate: hour }});
        },
        rowFromTime(time) {
            var startDate = this.hours[0];
            var endDate = this.fromTime(time);
            var duration = (endDate-startDate) / (1000 * 60) ;
            var row = parseInt(duration / this.step) + 2;
            return row > 0 ? row : 2;
        },
        row(event) {
            return this.rowFromTime(event.startTime);
        },
        col(event) {
            const room = this.rooms.find(r => r.id === event.roomId);
            return this.rooms.indexOf(room);
        },
        rowspan(event) {
            var startRow = this.rowFromTime(event.startTime);
            var endRow = this.rowFromTime(event.endTime);
            return parseInt(endRow - startRow);
        },
        goToEvent(event) {
            this.$router.push({name: 'MeetingPageEdit', params: {id: event.id}});
        }
    },
    created() {
        this.date.setFullYear(this.$route.params.year);
        this.date.setMonth(this.$route.params.month);
        this.date.setDate(this.$route.params.day);
    }
}
</script>

<style scoped>
.block {
    display: contents;
}

.event {
    background: rgba(100, 76, 76, 0.3);
}
.event:hover {
    background: rgba(201, 76, 76, 0.3);
}
</style>