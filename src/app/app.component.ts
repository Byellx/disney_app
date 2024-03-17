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

  public headerStyle: object = {
    'height':'15vh',
    'width':'100vw',
    'background-color':'#393E8F',
    'position':'fixed',
    'display':'flex',
    'flex-direction':'column',
    'justify-content':'space-around',
    'align-items':'center'
  }
  
  public titleStyle: object = {
    'color':'#F3CC64'
  }

  public navStyle: object = {
    'height':'40%',
    'width':'100%',
    'background-color':'#12194A',
    'display':'flex',
    'flex-direction':'column',
    'justify-content':'space-around',
    'align-items':'center'
  }

  public aStyle: object = {
    'color':'#EFBEB7',
    'text-decoration':'none',
    'background-color':'#B12228',
    'width':'12em',
    'display':'flex',
    'flex-direction':'column',
    'justify-content':'space-around',
    'align-items':'center'
  }

  private aux: string = '#B12228'
}