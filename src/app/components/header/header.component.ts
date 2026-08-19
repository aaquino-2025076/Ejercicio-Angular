import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  
})
export class HeaderComponent {

  productos = [
    {
      id: 1,
      producto: 'laptop lenovo',
      categoria: 'computadoras',
      precio: 6500,
      stock: 5,
      activo: true
    },
    {
      id: 2,
      producto: 'Mouse Logitech',
      categoria: 'Accesorios',
      precio: 170,
      stock: 0,
      activo: true
    },
    {
      id: 3,
      producto: 'Teclado Mecánico',
      categoria: 'Accesorios',
      precio: 450,
      stock: 8,
      activo: true
    },
    {
      id: 4,
      producto: 'Monitor Samsung 24',
      categoria: 'Monitores',
      precio: 1850,
      stock: 2,
      activo: true
    },
    {
      id: 5,
      producto: 'Webcam Logitech',
      categoria: 'Accesorios',
      precio: 550,
      stock: 0,
      activo: false
    }
  ]

  botonCambiante = true;
  texto = 'Ocultar Productos';

  botonInventario(){
    if(this.botonCambiante === true){
      this.texto = 'Mostrar Productos';
      this.botonCambiante = false;
    }else{
      this.texto = 'Ocultar Productos';
      this.botonCambiante = true;
    }
  }

  buscador = '';
  buscarProductos (){

  }


}
