<template>
    <div class="card">
        <a class="btn stretched-link" :href="endpoint">
            <div class="card-body">
                    <div class="">
                        <h5 class="card-title">Data: {{ meeting.date | empty }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Czas trwania: {{ meeting.duration | emptyInt }}h</h6>
                    </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        meeting: Object
    },
    computed: {
        endpoint() {
            return "/meetings/" + this.meeting.id;
        }
    },
    filters: {
        empty(value) {
            if (!value)
                return 'Brak';
            return value;
        },
        emptyInt(value) {
            if (!value)
                return '0';
            return value;
        }
    }
}
</script>