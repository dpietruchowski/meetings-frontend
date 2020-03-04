<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1>{{ getTitle }}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="save">Zapisz</button>
                    <button type="button" v-if="!isNew" class="btn btn-sm btn-outline-secondary" @click="remove">Usuń</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="goToMeetings">Spotkania</button>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <div class="row">
                    <div class="col-12">
                        <div class="card-body d-flex flex-wrap row">
                            <label class="flex-grow-1 col-sm-6" for="name">Data</label>
                            <div class="col-sm-6"> <input class="form-control" id="date" type="date" v-model="meeting.date" /> </div>
                        </div>
                        <div class="card-body d-flex flex-wrap row">
                            <label class="flex-grow-1 col-sm-6" for="name">Czas rozpoczęcia</label>
                            <div class="col-sm-6"> <input class="form-control" id="time" type="time" v-model="meeting.start_time" /> </div>
                        </div>
                        <div class="card-body d-flex flex-wrap row">
                            <label class="flex-grow-1 col-sm-6" for="name">Czas zakończenia</label>
                            <div class="col-sm-6"> <input class="form-control" id="time" type="time" v-model="meeting.end_time" /> </div>
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
    props: {
        initDate: Date
    },
    data() {
        return {
            endpoint: "/meetings",
            postRemoveRouteName: 'MeetingsPage',
            postSaveRouteName: 'MeetingPage',
            postCreateRouteName: 'MeetingsPage',
            instance: {
                id: '',
                date: '2020-02-26T07:00:00.274Z',
                start_time: '',
                end_time: ''
            }
        }
    },
    computed: {
        getTitle() {
            if (!this.isNew)
                return "Edytuj spotkanie " + this.meeting.id;
            else
                return "Nowe spotkanie";
        },
        meeting() {
            return this.instance
        }
    },
    methods: {
        goToMeetings () {
            this.$router.push({name: 'MeetingsPage'});
        }
    },
    created () {
        this.meeting.id = this.$route.params.id
        if (this.meeting.id) {
            this.load()
        } else {
            if (this.initDate) {
                this.meeting.date = this.initDate.toISOString().substring(0, 10);
                this.meeting.start_time = this.initDate.toTimeString().split(' ')[0];
                this.meeting.end_time = this.initDate.toTimeString().split(' ')[0];
            }
        }
    },
}
</script>