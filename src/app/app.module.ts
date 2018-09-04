import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatDialogModule,
  MatTabsModule,
  MatListModule,
  MatFormFieldModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoKatS1BwqOm28zsBJSwvrbTqu8k1YveQ'
    })
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserDetailComponent]
})
export class AppModule {
}
