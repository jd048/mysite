import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
var element = document.getElementById("modal1");

declare var $:any;
declare var jQuery: any;

  
@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue: string;
  hiding: String;
  active: any;
  no:boolean;
  
  constructor(public chat: ChatService) { }
  ngOnInit() {
    this.messages = this.chat.conversation.asObservable().scan((acc, val) => acc.concat(val) );
       
       
        this.active = true;
       this.no = false;
 

$(document).ready(function(){
  $("button").click(function(){
      $("#mods").toggle();
  });
  });

     



}


  sendMessage1() {
    console.log("hello");
    
$('#modal1').modal({
 
  opacity: .6, // Opacity of modal background
  startingTop: '0%', // Starting top style attribute
  endingTop: '20%', // Ending top style attribute
  ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    alert("Ready");
    console.log(modal, trigger);
  },
  complete: function() { alert('Closed'); } // Callback for Modal close
}
);

  }
  
  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';

    var objDiv = $("#modal2");
    
           var h = objDiv.get(0).scrollHeight;
    
           objDiv.animate({scrollTop: h});
    

    
  }

    myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


}

