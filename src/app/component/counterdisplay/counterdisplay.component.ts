import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from 'src/app/shared/store/counter.model';
import { getCounter } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit {
counterValue!: number;
counter$ = this.store.select("counter");
counterDisplay!:number;
channelName!:any;


  constructor(private store : Store<{counter:counterModel}>,private stores:Store) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data)=>{
      console.log(data);
      this.counterDisplay = data;
console.log('counter display')
    })
   }

}
