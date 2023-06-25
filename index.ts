import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
} 

axios.get(url).then(respose =>{
    const todo = respose.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        the doto with id: ${id}
        has a title of : ${title}
        is it finished: ${completed}
`);
};