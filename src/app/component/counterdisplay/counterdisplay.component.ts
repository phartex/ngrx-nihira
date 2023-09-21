import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit {
counterValue!: number;
counter$ = this.store.select("counter");


  constructor(private store : Store<{counter:counterModel}>,private stores:Store) { }

  ngOnInit(): void { }

}
