import { Component, OnInit } from '@angular/core';



declare var $:any;
declare var jQuery: any;
$(document).ready(function(){
  $('.slider').slider();
});



$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('#modal2').modal();
});
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    
  }

}
