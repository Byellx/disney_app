import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, NgClass],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  constructor(private characterService: CharacterService, private route: ActivatedRoute){
    this.catchOneCharacter()
  }

  url: string = 'https://api.disneyapi.dev/character'
  character!: Character
  public card = 'card'

  catchOneCharacter(id?: number, isNext?: boolean){
    if(!id){
      id = Number(this.route.snapshot.paramMap.get('id'))

      this.characterService.getOneCharacter(this.url, id).subscribe((character)=>{
        this.character = character.data
      })
    }else{
      this.characterService.getOneCharacter(this.url, id).subscribe((character)=>{
        if(!character.data){
          console.log(`NÃO HÁ DADOS A SEREM RECEBIDOS DO ID: ${id}`)
        }else if(Array.isArray(character.data)){
          if(!id){
            console.log(`PÁGINA 404`)
          }else{
            if(isNext){
              if(id >= 1){
                this.catchOneCharacter(id+1, true)
              }else{
                console.log(`Página 404`)
              }
            }else{
              if(id <= 7526){
                this.catchOneCharacter(id-1, false)
              }else{
                console.log(`Página 404`)
              }
            }
          }
        }else{
          this.character = character.data
        }
      })
    }
  }

  previousCharacter(prevChar: number){
    this.catchOneCharacter(prevChar, false)
  }

  nextCharacter(nextChar: number){
    this.catchOneCharacter(nextChar, true)
  }
}