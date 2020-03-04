import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Button from "@/components/button/Button.vue";
import Table from "@/components/table/Table.vue";
import TableRow from "@/components/table/TableRow.vue";
import TableCol from "@/components/table/TableCol.vue";
import TableCell from "@/components/table/TableCell.vue";
import Grid from '@/components/grid/Grid.vue';
import GridCell from '@/components/grid/GridCell.vue';

Vue.config.productionTip = false;

Vue.component('app-button', Button)
Vue.component('grid', Grid)
Vue.component('grid-cell', GridCell)
Vue.component('dtable', Table)
Vue.component('dtable-row', TableRow)
Vue.component('dtable-col', TableCol)
Vue.component('dtable-cell', TableCell)

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
