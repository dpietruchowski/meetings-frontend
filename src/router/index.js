import Vue from "vue";
import Router from "vue-router";
import MainPage from "@/pages/MainPage";
import MeetingCalendarPage from "@/pages/meetings/MeetingCalendarPage";
import MeetingCalendarWeeklyPage from "@/pages/meetings/MeetingCalendarWeeklyPage";
import MeetingCalendarDailyPage from "@/pages/meetings/MeetingCalendarDailyPage";
import MeetingPage from "@/pages/meetings/MeetingPage";
import MeetingEditPage from "@/pages/meetings/MeetingEditPage";
import MeetingsPage from "@/pages/meetings/MeetingsPage";
import MeetingRoomPage from "@/pages/rooms/MeetingRoomPage";
import MeetingRoomEditPage from "@/pages/rooms/MeetingRoomEditPage";
import MeetingRoomsPage from "@/pages/rooms/MeetingRoomsPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      name: "MainPage",
      component: MainPage
    },
    {
      path: "/calendar",
      name: "MeetingCalendarPage",
      component: MeetingCalendarPage
    },
    {
      path: "/calendar/weekly/:year/:month/:week",
      name: "MeetingCalendarWeeklyPage",
      component: MeetingCalendarWeeklyPage
    },
    {
      path: "/calendar/daily/:year/:month/:day",
      name: "MeetingCalendarDailyPage",
      component: MeetingCalendarDailyPage
    },
    {
      path: "/meetings",
      name: "MeetingsPage",
      component: MeetingsPage
    },
    {
      path: "/meetings/new",
      name: "MeetingPageNew",
      component: MeetingEditPage,
      props: true
    },
    {
      path: "/meetings/:id",
      name: "MeetingPage",
      component: MeetingPage
    },
    {
      path: "/meetings/:id/edit",
      name: "MeetingPageEdit",
      component: MeetingEditPage
    },
    {
      path: "/rooms/",
      name: "MeetingRoomsPage",
      component: MeetingRoomsPage
    },
    {
      path: "/rooms/new",
      name: "MeetingRoomPageNew",
      component: MeetingRoomEditPage
    },
    {
      path: "/rooms/:id",
      name: "MeetingRoomPage",
      component: MeetingRoomPage
    },
    {
      path: "/rooms/:id/edit",
      name: "MeetingRoomPageEdit",
      component: MeetingRoomEditPage
    }
  ]
});
