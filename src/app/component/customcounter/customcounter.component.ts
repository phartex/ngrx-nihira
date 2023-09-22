import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCrement } from 'src/app/shared/store/counter.actions';
import { counterModel } from 'src/app/shared/store/counter.model';
import { getChannelName } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.scss']
})
export class CustomcounterComponent implements OnInit {
  counterInput!:number;
  channelName!:string;
  actiontype:any = "add";
  constructor(private store:Store<{counter:counterModel}>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((data)=>{
      console.log(data); 
      this.channelName = data;
      console.log('custom counter')
    })
  }

  OnCrement(){
    this.store.dispatch(customCrement({value: +this.counterInput, action:this.actiontype }))
  }

}
