import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

listaAlumnos: any = [{"id":1,"first_name":"Marline","last_name":"Ghidini","promedio":10,"materia":"Hiri Motu","escuela":"Guangzhou University of Traditional Chinese Medicine"},
{"id":2,"first_name":"Tera","last_name":"Macauley","promedio":9,"materia":"Croatian","escuela":"Lumbini Buddhist University"},
{"id":3,"first_name":"Jourdan","last_name":"Bovey","promedio":10,"materia":"Gagauz","escuela":"Mount Mercy College"},
{"id":4,"first_name":"Byrann","last_name":"Skey","promedio":7,"materia":"Chinese","escuela":"Pacific International College"},
{"id":5,"first_name":"Mitchell","last_name":"Gribbon","promedio":10,"materia":"Montenegrin","escuela":"Indiana University - Northwest"},
{"id":6,"first_name":"Ava","last_name":"Towers","promedio":6,"materia":"Bengali","escuela":"Tohoku University of Art and Design"},
{"id":7,"first_name":"Garrett","last_name":"Heeney","promedio":9,"materia":"Bislama","escuela":"Faculdade Integradas do Ceará"},
{"id":8,"first_name":"Loutitia","last_name":"Thomelin","promedio":6,"materia":"Czech","escuela":"Ho Chi Minh City University of Transport"},
{"id":9,"first_name":"Fredra","last_name":"Westall","promedio":10,"materia":"Danish","escuela":"Fachhochschule Konstanz, Hochschule für Technik, Wirtschaft und Gestaltung"},
{"id":10,"first_name":"Quinta","last_name":"Vannuchi","promedio":9,"materia":"Malayalam","escuela":"Mid-Continent Baptist Bible College"},
{"id":11,"first_name":"Venita","last_name":"Worts","promedio":8,"materia":"Pashto","escuela":"New York College of Podiatric Medicine"},
{"id":12,"first_name":"Faustina","last_name":"Hallagan","promedio":8,"materia":"Montenegrin","escuela":"Mount St. Mary College"},
{"id":13,"first_name":"Stanton","last_name":"Peron","promedio":9,"materia":"Polish","escuela":"Minneapolis College of Art and Design"},
{"id":14,"first_name":"Serena","last_name":"Bostick","promedio":10,"materia":"Estonian","escuela":"Azusa Pacific University"},
{"id":15,"first_name":"Aida","last_name":"Lumm","promedio":9,"materia":"Lao","escuela":"Katholieke Universiteit Leuven"},
{"id":16,"first_name":"Felix","last_name":"Tarbox","promedio":6,"materia":"Tok Pisin","escuela":"Mansfield University of Pennsylvania"},
{"id":17,"first_name":"Nigel","last_name":"Commucci","promedio":7,"materia":"Greek","escuela":"Andhra University"},
{"id":18,"first_name":"Burg","last_name":"Ashe","promedio":10,"materia":"Burmese","escuela":"Baha'i Institute for Higher Education"},
{"id":19,"first_name":"Ara","last_name":"Cotterel","promedio":8,"materia":"Hebrew","escuela":"Universidade Federal Rural do Semi-Árido"},
{"id":20,"first_name":"Tandi","last_name":"Dedenham","promedio":9,"materia":"Danish","escuela":"Institut Teknologi Brunei"},
{"id":21,"first_name":"Llywellyn","last_name":"Terese","promedio":8,"materia":"Estonian","escuela":"Puget Sound Christian College"},
{"id":22,"first_name":"Ruby","last_name":"Stiegar","promedio":7,"materia":"Hebrew","escuela":"Showa University"},
{"id":23,"first_name":"Agace","last_name":"Hawksley","promedio":8,"materia":"Telugu","escuela":"National Central University"},
{"id":24,"first_name":"Creight","last_name":"Pala","promedio":9,"materia":"Tamil","escuela":"Ilam University"},
{"id":25,"first_name":"Max","last_name":"Paolacci","promedio":7,"materia":"Kannada","escuela":"Universidad de Puerto Rico, Aguadilla"},
{"id":26,"first_name":"Xever","last_name":"Beardsall","promedio":10,"materia":"Swedish","escuela":"Leon Kozminski Academy of Entrepreneurship and Mangement in Warsaw"},
{"id":27,"first_name":"Stearne","last_name":"Hynard","promedio":8,"materia":"Dutch","escuela":"Jawaharlal Nehru Agricultural University"},
{"id":28,"first_name":"Raphaela","last_name":"McNess","promedio":7,"materia":"Amharic","escuela":"Slovak University of Technology in Bratislava"},
{"id":29,"first_name":"Audrie","last_name":"Clingoe","promedio":10,"materia":"Gagauz","escuela":"Fachhochschule Koblenz"},
{"id":30,"first_name":"Padraic","last_name":"Josefsen","promedio":10,"materia":"Zulu","escuela":"Université Ez-Zitouna"}];

alumnoNombre: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  datosAlumno(alumno: string){
    this.alumnoNombre = alumno;
  }

}
