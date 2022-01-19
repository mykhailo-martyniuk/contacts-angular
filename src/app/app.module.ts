import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { CreateNewContactComponent } from './create-new-contact/create-new-contact.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from '../pipes/filter-pipe';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MainComponent } from './main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CreateNewContactComponent,
    SearchComponent,
    FilterPipe,
    ContactPageComponent,
    MainComponent,
  ],
  imports: [
    MatSidenavModule,
    MatTooltipModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
