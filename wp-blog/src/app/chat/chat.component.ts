import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import 'rxjs/add/observable/from';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var $:any;
declare var jQuery: any;


interface Post {
  title: string;
  content: string;
}
interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {
  title:string;
  content:string;
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
lo:string = "my-custom-id";
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });  }


  addPost() { 
    this.afs.collection('posts').add({'title': this.title});
    var objDiv = $("#modal2");
    
           var h = objDiv.get(0).scrollHeight;
    
           objDiv.animate({scrollTop: h});
    


  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }
  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }

}


