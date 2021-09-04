import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {

  name: string = 'Campo Requerido'
  color: string = 'green'

  myForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  error(campo: string):boolean {
    return this.myForm.get(campo)?.invalid || false;
  }

  changeName(){
    this.name = Math.random().toString()
  }

  changeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color
  }

}
