Vue.component('Mycomponent',{
    template: '<p>This is a {{color}} component<button v-on:click="changeColor">Change color</button></p>',
    data: function(){
        return {
            color: 'blue'
        };
    },
    methods: {
        changeColor: function(){
            this.color = 'red';
        }
    }
});

new Vue({
    el: '#app'
});