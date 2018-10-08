new Vue({
    el:'#app',
    data:{
        link: 'https://www.allanjeremy.com',
        someHtml: '<b>Some fancy</b> html<br/>',
        title:'Some title',
        description:'Some description about the thing whose name shall not be mentioned',
    },
    methods:{
        sayHi: function(name){
            let returnable = '';
            if(name === 'Allan Jeremy')
            {
                returnable = 'Welcome back good sir! ';
            }
            returnable += "Well hello there "+name+" "+this.title;
            return returnable;
        }
    }
});