import { Component, Input } from '@angular/core';
import { Contact } from './contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    heroForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.model = new Contact('', '', '', '');
      this.title = 'Ejemplo de Contacto';
      this.createForm();
    }
    createForm() {
      this.heroForm = this.fb.group({
        name: ['', Validators.required],
        observation: ['', Validators.required],
        phone: ['', Validators.required],
        motive: ['', Validators.required]
      });
    }
    /* get diagnostic() { return JSON.stringify(this.model); } */
    onSubmit() {
      console.log('Guardar:D ', this.model);
    }
    back() {
      this.model = new Contact('', '', '', '');
    }
}
