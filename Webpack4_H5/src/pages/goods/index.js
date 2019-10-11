import './index.scss';

import Vue from 'vue';
//import {} from '../../js/headRun.js';

import '../../js/goodsEvent.js';


let vm = new Vue({
    el: "#app",
    data: {
        flag: false,
        msg: '你好吗'
    },

    methods: {
        beforeEnter(el) {
            el.style.transform = 'translate(0,0)'
        },
        enter(el, done) {
            el.offsetWidth;
            el.style.transform = 'translate(150px,450px)';
            el.style.transition = 'all 1s ease';
            done();
        },
        afterEnter(el) {
            this.flag = !this.flag;
            console.log(this.flag);
            //this.flag = !this.flag;

            //el.style.opacity = 0.1
        },
        enterCancelled: function (el) {
            //this.flag = !this.flag;
        }




    },
    filters: {

    },
    directives: {

    },
    components: {

    },
    // 生命周期方法
    beforeCreate() {

    },
    created() {

    },
    beforeMount() {

    },
    mounted() {

    },
    beforeUpdate() {

    },
    updated() {

    },
    beforeDestroy() {

    },
    destroyed() {

    }


})