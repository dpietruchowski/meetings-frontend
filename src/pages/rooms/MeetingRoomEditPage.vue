<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1>{{ getTitle }}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="save">Zapisz</button>
                    <button type="button" v-if="!isNew" class="btn btn-sm btn-outline-secondary" @click="remove">Usuń</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="goToRooms">Sale</button>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <div class="row">
                    <div class="col-12">
                        <div class="card-body d-flex flex-wrap row">
                            <label class="flex-grow-1 col-sm-6" for="name">Nazwa</label>
                            <div class="col-sm-6"> <input class="form-control" id="name" type="text" v-model="room.name" /> </div>
                        </div>
                        <div class="card-body d-flex flex-wrap row">
                            <label class="flex-grow-1 col-sm-6" for="name">Pojemność</label>
                            <div class="col-sm-6"> <input class="form-control" id="name" type="number" min="0" max="100" step="1" v-model="room.capacity"  /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Crud from '@/logic/Crud'
export default {
    extends: Crud,
    data() {
        return {
            endpoint: "/rooms",
            postRemoveRouteName: 'MeetingRoomsPage',
            postSaveRouteName: 'MeetingRoomPage',
            postCreateRouteName: 'MeetingRoomsPage',
            instance: {
                name: '',
                capacity: 0
            }
        }
    },
    computed: {
        getTitle() {
            if (!this.isNew)
                return "Edytuj sale " + this.room.id;
            else
                return "Nowa sala";
        },
        room() {
            return this.instance
        }
    },
    methods: {
        goToRooms () {
            this.$router.push({name: 'MeetingRoomsPage'});
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