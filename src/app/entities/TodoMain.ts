import { TodoPriority } from './TodoPriority';
import { Login } from './Login';
import { TodoStep } from './TodoStep';

export class TodoMain {
    todoId: number;
    description: string;
    isComplete: boolean;
    isStarred: boolean;
    targetDate: Date;
    todoPriority: TodoPriority;
    login: Login;
    todoSteps: TodoStep[];
}