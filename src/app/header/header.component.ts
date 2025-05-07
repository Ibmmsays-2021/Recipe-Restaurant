import { Component, EventEmitter, Output } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() selectedFeature = new EventEmitter<string>();

  constructor(){}

  OnSelect(feature:string){
    this.selectedFeature.emit(feature);
  }
}
