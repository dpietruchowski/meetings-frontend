import { mapFilters } from '@/utils'
export default {
    data() {
        return {
            date: new Date(),
            days: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
            months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień']
        }
    },
    computed: {
        nRows() {
            return Math.ceil((this.lastDay.getDate() + this.offset) / this.nCols);
        },
        nCols() {
            return this.days.length;
        },
        firstDay() {
            return new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        },
        lastDay() {
            return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        },
        offset() {
            return this.firstDay.getDay();
        }
    },
    methods: {
        ...mapFilters(['toTimeStr']),
        day(row, col) {
            const cell = (row - 1) * this.nCols + col;
            return this.offset + cell;
        },
        hoursFromTo(from, to, step) {
            var date = new Date();
            date.setHours(from);
            date.setMinutes(0);
            date.setSeconds(0);
            var hours = [];
            while (date.getHours() < to) {
                date.setTime(date.getTime() + step * 1000 * 60);
                var h = new Date();
                h.setTime(date.getTime());
                hours.push(h);
            }
            return hours;
        },
        fromTime(time) {
            var a = time.split(':');
            console.log(a);
            var date = new Date();
            date.setHours(a[0]);
            date.setMinutes(a[1]);
            date.setSeconds(0);
            return date;
        },
    },
    filters: {
        toTimeStr(value) {
            return value.getHours + ':' + value.getMinutes;
        },
        toDateStr(value) {
            return value.getDate() + '-' + (value.getMonth() + 1) + '-' + value.getFullYear();
        },
        toDateTimeStr(value) {
            return this.toTimeStr(value) + this.toDateStr(value);
        },
        shortcut(value) {
            return value[0];
        }
    }
}