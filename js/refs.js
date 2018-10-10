new Vue({
    el:'#app',
    data: {
        textVal: ''
    },
    methods:{
        updateText: function(){
            this.$refs.textDisplay.innerHTML = this.$refs.inputText.value;
        }
    }
});