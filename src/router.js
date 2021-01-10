import Vue from 'vue'
//import Router from 'vue-router'


import RUS from '@/components/RUS'
import MENY from '@/components/MENY'
import menu from '@/components/menu'
import news from '@/components/news'
import complex from '@/components/complex'
import freeaudit from '@/components/freeaudit'
import ruz from '@/components/ruz'
import navigation from "@/components/navigation";
import Router from "vue-router";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'RUS',
            component: RUS
        },
        {
            path: '/MENY',
            name: 'MENY',
            component: MENY
        },
        {
            path: '/menu',
            name: 'menu',
            component: menu
        },
        {
            path: '/navigation',
            name: 'navigation',
            component: navigation
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path: '/complex',
            name: 'complex',
            component: complex
        },
        {
            path: '/freeaudit',
            name: 'freeaudit',
            component: freeaudit
        },
        {
            path: '/ruz',
            name: 'ruz',
            component: ruz
        }
]})
