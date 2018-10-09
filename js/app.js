new Vue({
    el:'#app',
    data:{
        todoItem: '',
        link: 'https://www.allanjeremy.com',
        title:'Some title',
        description:'Some description about the thing whose name shall not be mentioned',
        x:0,
        y:0
    },
    methods:{
        sayHi: function(name){
            var returnable = '';
            if(name === 'Allan Jeremy')
            {
                returnable = 'Welcome back good sir! ';
            }
            returnable += "Well hello there "+name+" "+this.title;
            return returnable;
        },
        reverseText: function()
        {
            this.title = this.title.split('').reverse().join('');
            this.description  = this.description.split('').reverse().join('');
        },
        updateCoordinates: function(evt)
        {
            this.x = evt.offsetX;
            this.y = evt.offsetY;
        },
        movePlayer: function(evt)
        {
            alert(evt);
        }
    }
    
});