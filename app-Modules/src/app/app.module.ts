import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PincodeComponent } from './pincode/pincode.component';

@NgModule({
  declarations: [
    AppComponent,
    PincodeComponent,
  ],
  imports: [

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
