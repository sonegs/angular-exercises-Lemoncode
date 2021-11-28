import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReweEntity } from '../../../interfaces/rewe-entity';

@Component({
  selector: 'app-rewe',
  templateUrl: './rewe.component.html',
  styleUrls: ['./rewe.component.scss']
})

export class ReweComponent implements OnInit {

  rewe: ReweEntity;
  reweValid: boolean = false;
  passEmail: string = '';
  passNumbers: number = 0;
  passCharacters: string = '';

  reweForm = new FormGroup({ // Fields validations
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    numbers: new FormControl('',[
      Validators.required,
      Validators.pattern("[0-9]+")]),
    characters: new FormControl('',[
      Validators.required,
      Validators.pattern("[^A-Za-z0-9]*")])
    });

    get valEmail(){
      return this.reweForm.get('email')
    }
    get valNumbers(){
      return this.reweForm.get('numbers')
    }
    get valCharacters(){
      return this.reweForm.get('characters')
    }

  constructor(){
    this.rewe = {
      email: '',
      numbers: 0,
      characters: ''
    }
  }

  ngOnInit(): void {
  }

  reweSend(){
     if(this.reweForm.valid) { // Get the values
       this.rewe.email = this.reweForm.value.email;
       this.rewe.numbers = this.reweForm.value.numbers;
       this.rewe.characters = this.reweForm.value.characters;

       this.reweValid = true;
      }
   }


}
