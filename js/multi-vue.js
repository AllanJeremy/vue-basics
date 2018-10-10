var mainApp = new Vue({
    el: '#main-app',
    data: {
        title: 'Main app title',
        isSecondaryTitle: false
    },
    methods: {
        changeTitle: function(){
            this.title = secondaryApp.title;
            this.isSecondaryTitle = true;
        }
    },
    computed: {

    }
});

var secondaryApp = new Vue({
    el:'#secondary-app',
    data:{
        title: 'Secondary app title',
        isPrimaryTitle: false
    },
    methods:{
        changeTitle: function(){
            this.title = mainApp.title;
            this.isPrimaryTitle = true;
        }
    },
    computed:{
    
    }
});

secondaryApp.title="Externally set title";