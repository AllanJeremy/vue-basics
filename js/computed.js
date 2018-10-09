new Vue({
    el:'#app',
    data: {
        num1: 0,
        num2: 0,
        answer: '',
        operation: 'plus'
    },
    computed: {
        addNumbers: function(){
            this.operation = 'plus';
            this.num1 = parseFloat(this.num1);
            this.num2 = parseFloat(this.num2);
            return this.num1 + this.num2;
        },
        subtractNumbers: function(){
            this.operation = 'minus';
            this.num1 = parseFloat(this.num1);
            this.num2 = parseFloat(this.num2);
            return this.num1 - this.num2;
        }
    }
});