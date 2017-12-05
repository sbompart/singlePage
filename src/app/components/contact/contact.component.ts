import { Component, Input } from '@angular/core';
/* import { strictEqual } from 'assert'; */
import { Contact } from './contact';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    title: string;
    @Input() name: string;
    motives = ['consulta', 'servicios', 'productos', 'otros'];
    model;
    animalControl = new FormControl('', [Validators.required]);
    constructor() {
      this.model = new Contact('', '', '', '');
      this.title = 'Ejemplo de Contacto';
    }
    get diagnostic() { return JSON.stringify(this.model); }
    onSubmit() {
      console.log('Guardar:D ', this.model);
    }
    back() {
      this.model = new Contact('', '', '', '');
    }
    showFormControls(form: any) {
      return form && form.controls['name'] &&
      form.controls['name'].value; // Dr. IQ
    }
}
