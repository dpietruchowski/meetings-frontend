<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1>Sale konferencyjne</h1>
            <div class="btn-group mr-2">
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="onAddClick">Dodaj</button>
            </div>
        </div>
        <div class="container card-columns">
            <meeting-room-row v-for="room in rooms" :key="room.id" :room="room"></meeting-room-row>
        </div>
    </div>
</template>

<script>
import MeetingRoomRowView from '@/views/MeetingRoomRowView.vue'
import { get } from '@/requests'
export default {
    components: {
        'meeting-room-row': MeetingRoomRowView,
    },
    data() {
        return {
            rooms: []
        }
    },
    methods: {
        onAddClick() {
            this.$router.push('/rooms/new')
        },
        load () {
            get( "/rooms").then(resp => {
                for (var _room of JSON.parse(resp)) {
                    var room = { id: _room.id, name: _room.name, capacity: _room.capacity};
                    this.rooms.push(room);
                }
            })
        },
    },
    created() {
        this.load();
    }
}
</script>