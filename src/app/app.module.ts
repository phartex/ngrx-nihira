import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { counterReducer } from './shared/store/counter.reducer';
import { MaterialUiModule } from './shared/material-ui/material-ui.module';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { MenuheaderComponent } from './component/menuheader/menuheader.component';
import { HomeComponent } from './component/home/home.component';
import { EditblogComponent } from './component/editblog/editblog.component';
import { LoadingspinnerComponent } from './component/loadingspinner/loadingspinner.component';
import { CounterComponent } from './component/counter/counter.component';
import { BlogComponent } from './component/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcounterComponent,
    MenuheaderComponent,
    HomeComponent,
    EditblogComponent,
    LoadingspinnerComponent,
    CounterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    StoreModule.forRoot({counter : counterReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
