import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [ AppComponent, UserProfileComponent, LoginComponent, SettingsComponent ],
  providers: [AuthGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
