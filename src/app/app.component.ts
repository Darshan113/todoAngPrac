import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.showList()
  }
  title = 'todoApp';
  Todotitle : string = ''
  filter : string = '0'

  filteredTodo : Todo[] = []
  // define todolist arr
  todoList : Todo[] = [
    {title : 'wake up 6:30',isCompleted : false},
    {title : 'learn dsa ',isCompleted : true},
    {title : 'learn typescript',isCompleted : false},
    {title : 'create todolist ',isCompleted : false},
  ]

  // filter
  showList(){
    if(this.filter === '0'){
      this.filteredTodo = this.todoList
    }else if(this.filter === '1'){
      console.log('completed')
      this.filteredTodo = this.todoList.filter((todo)=>todo.isCompleted === true)
    }else{
      console.log('notcompleted')
      this.filteredTodo = this.todoList.filter((todo)=>todo.isCompleted === false)
    }
  }

  // updateTodo
  updateTodo(todo : Todo){
   console.log(todo.isCompleted)
  }


  addTodo(){
    let newTodo : Todo = {title : this.Todotitle , isCompleted : false}
    this.todoList.push(newTodo)
    this.Todotitle = ''
  }
}
