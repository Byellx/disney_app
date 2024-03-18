import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgClass,
    NgStyle
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'disney_app';

  constructor(){
    
  }

  public headerStyle = 'headerStyle'
  
  public titleStyle = 'titleStyle'

  public navStyle = 'navStyle'

  public aStyle = 'aStyle'
}