import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

 TestBed.configureTestingModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [RouterTestingModule]
}).compileComponents();