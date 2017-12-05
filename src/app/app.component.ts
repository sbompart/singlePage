import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LOGO';
  menu = [
    {
      title: 'Inicio',
      link: '/home',
      icon: 'info',
      redirect: true
    },
    {
      title: 'Servicios',
      link: '/home#services',
      icon: 'info',
      redirect: false
    },
    {
      title: 'Quienes Somos',
      link: '/home#about',
      icon: 'info',
      redirect: false
    },
    {
      title: 'Contacto',
      link: '/contact',
      icon: 'info',
      redirect: true
    },
  ];
}
