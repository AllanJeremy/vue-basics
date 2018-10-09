new Vue({
    el:'#app',
    data:{
        name: '',
        message: '',
        currentTodo: '',
        todosExist: false,
        todos: [],
    },
    methods:{
        addTodo: function(){
            //If the text for the current todo is empty, prevent adding of the todo item
            if(this.currentTodo == '')
            {
                alert('Todo cannot be empty! Please enter a value');
                return;
            }
            this.todos.push({
                text: this.currentTodo
            });
            this.currentTodo = '';
            this.todosExist = (this.todos.length>0);
        },
    }
});