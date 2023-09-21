import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset, updateName } from 'src/app/shared/store/counter.actions';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent implements OnInit {

  constructor(private store: Store<{counter:counterModel}>) { }

  ngOnInit(): void {
  }

  OnIncrement(){
    this.store.dispatch(increment());
  }
  OnDecrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }

  updateName(){
    this.store.dispatch(updateName({channel:"i am changing...."}))

  }

}
