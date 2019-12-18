import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'firebase-crud';
  // std: AngularFireList<any>;
  items: Observable<any[]>;
  imgsObj: Observable<any[]>;
  imgs;
  data;

  constructor(  ) {
    // this.items = this.db.list('items').valueChanges();
    // this.imgsObj = this.db.list('avatars').valueChanges();
  }
  ngOnInit() {

    //  this.items.subscribe( w =>  this.data =  w );
    //  this.imgsObj.subscribe( w => {

    //    this.imgs =  w;
    //    console.log(this.imgs);
    //  });
   // this.std.snapshotChanges().subscribe( el => console.log(el) );

  }

  addImage(value) {
    console.log(value);
    // this.db.list('avatars').push(value);
  }
}
