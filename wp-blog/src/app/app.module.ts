import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatbotModule } from './chatbot/chatbot.module';
import { HomeComponent } from './home/home.component';
import { CreatorComponent } from './creator/creator.component';

import { MaterializeModule } from 'angular2-materialize';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SaniPipe } from './sani.pipe';




var  firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

@NgModule({
  declarations: [
    AppComponent,
PostSingleComponent,
PostListComponent,
ChatComponent,
HomeComponent,
CreatorComponent,
SaniPipe
  ],
  imports: [
 HttpClientModule,
   FormsModule,
    BrowserModule,
Wpng2RoutingModule,
AngularFireModule.initializeApp(firebaseConfig),  // Add this
AngularFirestoreModule,
ChatbotModule,
MaterializeModule,
BrowserAnimationsModule,
MatButtonModule,
 MatCheckboxModule,
MatSidenavModule,
MatToolbarModule,
FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
