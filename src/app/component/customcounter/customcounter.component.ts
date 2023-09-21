import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCrement } from 'src/app/shared/store/counter.actions';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.scss']
})
export class CustomcounterComponent implements OnInit {
  counterInput!:number;
  actiontype:any = "add";
  constructor(private store:Store<{counter:counterModel}>) { }

  ngOnInit(): void {

  }

  OnCrement(){
    this.store.dispatch(customCrement({value: +this.counterInput, action:this.actiontype }))
  }

}
