<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1>{{ getTitle }}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="goToEdit">Edytuj</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="goToRooms">Spotkania</button>
            </div>
        </div>
        <div class="container">
            <meeting-view :meeting="meeting"></meeting-view>
        </div>
    </div>
</template>

<script>
import MeetingRowView from '@/views/MeetingRowView.vue'
import { get } from '@/requests'
export default {
    components: {
        'meeting-view': MeetingRowView
    },
    data() {
        return {
            endpoint: "/meetings",
            meeting: { id: '', date: '', start_time: '', end_time: '' }
        }
    },
    computed: {
        isNew() {
            return !this.meeting.id;
        },
        getEndpoint() {
            if (!this.isNew)
                return "" + this.endpoint + '/' + this.meeting.id;
            else
                return this.endpoint;
        },
        getTitle() {
            return "Sala nr " + this.meeting.id;
        },
    },
    methods: {
        load () {
            get(this.getEndpoint).then(resp => {
                resp = JSON.parse(resp);
                if (resp.ok)
                    this.meeting = resp.data
            })
        },
        goToRooms () {
            this.$router.push({name: 'MeetingsPage'});
        },
        goToEdit () {
            this.$router.push({name: 'MeetingPageEdit'});
        }
    },
    created () {
        this.meeting.id = this.$route.params.id
        if (this.meeting.id) {
            this.load()
        }
    }
}
</script>