new Vue({
    el:'#app',
    data: {
        error: false,
        success: false
    },
    methods: {
        toggleError: function(){
            this.error = !this.error;
            this.success = false;
        },
        toggleSuccess: function(){
            this.success = !this.success;
            this.error = false;
        }
    }
});