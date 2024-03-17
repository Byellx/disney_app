import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { PageInfo } from '../../models/page-info';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterLink,
    NgIf,
    NgFor,
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {
  constructor(private characterService: CharacterService, private formBuilder: FormBuilder){
    this.catchAllCharacters(this.urlAPI)
    this.searchBox = this.formBuilder.group({
      searchText: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ])],
      searchOption: ['name', Validators.required]
    })
  }

  public allCharacters!: Character[]
  public pageInfo!: PageInfo

  urlAPI: string = 'https://api.disneyapi.dev/character'
  searchBox: FormGroup

  catchAllCharacters(url: string){
    if(url === null){
      console.log('NÃO FOI POSSÍVEL PROCESSAR A REQUISIÇÃO')
    }else{
      this.characterService.getAllCharacters(url).subscribe((characters)=>{
        this.pageInfo = characters.info
        this.allCharacters = characters.data
      })
    }
  }

  catchCharacterByParams(){
    const text: string = this.searchBox.controls['searchText'].value
    const option: string = this.searchBox.controls['searchOption'].value

    if(option === 'name'){
      this.catchCharacterByName(text)
    }else if(option === 'film'){
      this.catchCharacterByFilm(text)
    }else{
      console.log('Opção de busca inválida!')
    }
  }

  catchCharacterByName(name: string){
    this.characterService.getCharacterByName(this.urlAPI, name).subscribe((charactersByName)=>{
      this.allCharacters = charactersByName.data
      this.pageInfo = charactersByName.info

      if(charactersByName.info.nextPage){
        this.pageInfo.nextPage = charactersByName.info.nextPage + `&name=${name}`
      }

      if(charactersByName.info.previousPage){
        this.pageInfo.previousPage = charactersByName.info.previousPage + `&name=${name}`
      }
    })
  }

  catchCharacterByFilm(film: string){
    this.characterService.getCharacterByFilm(this.urlAPI, film).subscribe((charactersByFilm)=>{
      this.allCharacters = charactersByFilm.data
      this.pageInfo = charactersByFilm.info
      

      if(charactersByFilm.info.nextPage){
        this.pageInfo.nextPage = charactersByFilm.info.nextPage + `&films=${film}`
      }

      if(charactersByFilm.info.previousPage){
        this.pageInfo.previousPage = charactersByFilm.info.previousPage + `&films=${film}`
      }
    })
  }

  nextPage(){
    if(!this.pageInfo.nextPage){
      console.log('NÃO HÁ PRÓXIMA PÁGINA')
    }else{
      const nextPage: string | null = this.pageInfo.nextPage
      console.log(nextPage)
      this.catchAllCharacters(nextPage)
    }
  }

  previousPage(){
    if(!this.pageInfo.previousPage){
      console.log('NÃO HÁ PÁGINA ANTERIOR')
    }else{
      const previousPage: string | null = this.pageInfo.previousPage
      console.log(previousPage)
      this.catchAllCharacters(previousPage)
    }
  }
}