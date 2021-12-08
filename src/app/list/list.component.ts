import { Component, OnInit } from '@angular/core';
import { Item } from './item'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  trashIcon = faTrash
  editIcon = faEdit
  name:string = 'Tiffany'
  // filter: 'all' | 'active' = 'all'
  list:Item[]=[{todo: 'Walk dog', completed: false, display: true}]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  addItem(todo:string): void {
    this.list.push({todo, completed:false, display:true})
  }

  toggleItem(index:number): void {
    this.list[index].completed = this.list[index].completed ? false : true;
  }

  editItem(todo:string, index:number) {
    this.list[index].display = !this.list[index].display
    if(this.list[index].display) {
      this.list[index].todo = todo
    }
  }

  deleteItem(index:number): void {
    this.list.splice(index, 1)
  }

}
