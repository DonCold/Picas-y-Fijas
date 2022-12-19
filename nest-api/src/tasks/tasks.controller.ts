import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-tast.dto';
import { TasksService } from './tasks.service';

import { Task } from './interfaces/tasks';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);

    return 'Creando tarea';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `Delete task ${id}`;
  }
}
