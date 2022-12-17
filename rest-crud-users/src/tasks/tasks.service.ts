import { Injectable } from '@nestjs/common';

import { Task } from './interfaces/tasks';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Hola',
      description: 'Hola',
      done: true,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
