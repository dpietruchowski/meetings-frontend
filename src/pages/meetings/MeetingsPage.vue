<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1>Spotkania</h1>
            <div class="btn-group mr-2">
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="onAddClick">Dodaj</button>
            </div>
        </div>
        <div class="container card-rows">
            <meeting-view v-for="meeting in meetings" :key="meeting.id" :meeting="meeting"></meeting-view>
        </div>
    </div>
</template>

<script>
import MeetingRowView from '@/views/MeetingRowView'
import { get } from '@/requests'
export default {
    components: {
        'meeting-view': MeetingRowView
    },
    data() {
        return {
            meetings: []
        }
    },
    methods: {
        onAddClick() {
            this.$router.push({name: 'MeetingPageEdit'});
        },
        load () {
            get( "/meetings").then(resp => {
                console.log(JSON.parse(resp));
                for (var _meeting of JSON.parse(resp)) {
                    this.meetings.push(_meeting);
                }
            })
        },
    },
    created() {
        this.load();
    }
}
</script>