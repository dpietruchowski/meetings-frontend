import { get, put, post, del } from '@/requests'
export default {
    data() {
        return {
            endpoint: '',
            postRemoveRouteName: '',
            postSaveRouteName: '',
            postCreateRouteName: '',
            instance: {}
        }
    },
    computed: {
        isNew() {
            return !this.instance.id;
        },

    },
    methods: {
        load() {
            get(this.endpoint, this.instance)
            .then(resp => {
                resp = JSON.parse(resp)
                if (resp.ok)
                    this.instance = resp.data;
            });
        },
        save() {
            if (this.isNew)
                post(this.endpoint, this.instance)
                .then(resp => {
                    resp = JSON.parse(resp)
                    if (resp.ok)
                        this.$router.push({name: this.postSaveRouteName});
                    else
                        alert("Blad zapisywania");
                });
            else
                put(this.endpoint, this.instance)
                .then(resp => {
                    resp = JSON.parse(resp)
                    if (resp.ok)
                        this.$router.push({name: this.postSaveRouteName});
                    else
                        alert("Blad zapisywania");
                });
        },
        remove() {
            del(this.endpoint, this.instance)
            .then(resp => {
                resp = JSON.parse(resp)
                if (resp.ok)
                    this.$router.push({name: this.postRemoveRouteName});
                else
                    alert("Blad usuwania");
            });
        }
    }
}