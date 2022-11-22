import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Proforma } from '../proforma';
import { ProformaService } from '../proforma.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-lista-proforma',
  templateUrl: './lista-proforma.component.html',
  styleUrls: ['./lista-proforma.component.css']
})
export class ListaProformaComponent implements OnInit {
  
  totalProforma:number;
  proforma:Proforma[];
  proforma2:Proforma;
  constructor(private proformaServicio:ProformaService, private router:Router,private route:ActivatedRoute) { 
    //this.downloadPDF();
  }
  
  public downloadPDF(): void {
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p','pt','a4');
    const options = {
      backgroud: 'white',
      scale: 3,
    };
    html2canvas(DATA,options)
    .then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_proforma.pdf`);
      this.eliminarProforma();
    });

   
  }

  ngOnInit(): void {
    if(localStorage.getItem('login')){
      console.log('localstorage',localStorage.getItem('login').length);
    }else{
      this.router.navigate(['login']);
    }
    this.obtenerProformas();
  }

  eliminarProforma(){
   
        this.proformaServicio.eliminarProforma().subscribe(dato => {
          console.log(dato);  
    });
    this.irAlaListaDeProductos();
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  private obtenerProformas(){
    let sum = 0;
    this.proformaServicio.obtenerListaDeProforma().subscribe(dato => {
      this.proforma = dato;

      this.proforma.forEach((element) => {
        sum += (element.cantidadUsuario * element.precio);

      });

      console.log("total Proforma2:  ",sum);
      this.totalProforma = sum;
      console.log("total Proforma3:  ",this.totalProforma);

      //for (var i = 0; i < this.proforma.length; i++) {

       // var summaryData = this.proforma[i];
        //console.log(" fleet summary ID:  ", summaryData.cantidadUsuario * summaryData.precio);
        //this.totalProforma = +(summaryData.cantidadUsuario * summaryData.precio);
     // }
     // console.log("total Proforma:  ",this.totalProforma);
    });
  }

  Productos(){
    this.router.navigate(['productos']);
  }

  RegistroProductos(){
    this.router.navigate(['registrar-producto']);
  }

  RegistroUsuarios(){
    this.router.navigate(['registrar-usuario']);
  }

  cerrarSesion(){
    localStorage.removeItem('login');
    this.router.navigate(['login']);
  }

}
