import {Component, ViewChild,  OnInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


declare var $:any;
declare var jQuery: any;
var elm = document.getElementById("modal1");
$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('#modal1').modal();
});
$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('#modal2').modal();
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  
  
  
 

    ngOnInit() {
      $(".button-collapse").sideNav();
     
     
      
    

    }
      
  }
        


