import { TodoList } from './TodoList';
import { TodoMain } from './TodoMain';
import { TodoPriority } from './TodoPriority';

export class Login {
    loginId: number;
    password: string;
    roles: string;
    username: string;
    todoLists: TodoList[];
    todoMains: TodoMain[];
    todoPriorities: TodoPriority[];
}