<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1>{{ getTitle }}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="goToEdit">Edytuj</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="goToRooms">Sale</button>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="">
                        <h5 class="card-title">{{ room.id }} {{ room.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Pojemność: {{ room.capacity }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { get } from '@/requests'
export default {
    data() {
        return {
            endpoint: "/rooms",
            room: {
                name: '',
                capacity: 0
            }
        }
    },
    computed: {
        r() {
            return this.room;
        },
        isNew() {
            return !this.room.id;
        },
        getEndpoint() {
            if (!this.isNew)
                return "" + this.endpoint + '/' + this.room.id;
            else
                return this.endpoint;
        },
        getTitle() {
            return "Sala nr " + this.room.id;
        },
    },
    methods: {
        load () {
            get(this.getEndpoint).then(resp => {
                resp = JSON.parse(resp);
                if (resp.ok == true) {
                    this.room.id = resp.data.id;
                    this.room.name = resp.data.name;
                    this.room.capacity = resp.data.capacity;
                }
            })
        },
        goToRooms () {
            this.$router.push({name: 'MeetingRoomsPage'});
        },
        goToEdit () {
            this.$router.push({name: 'MeetingRoomPageEdit'});
        }
    },
    created () {
        this.room.id = this.$route.params.id
        if (this.room.id) {
            this.load()
        }
    }
}
</script>