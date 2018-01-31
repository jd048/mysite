import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
import { BotinfoComponent } from './botinfo/botinfo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChatDialogComponent, BotinfoComponent],
  providers: [ChatService],
  exports: [ChatDialogComponent]
  
})
export class ChatbotModule { }
