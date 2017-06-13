import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
  providers: [CharacterService]
})
export class NewCharacterComponent {
  constructor(private characterService: CharacterService,private router: Router) { }
  newCharacter = true;
  characters : FirebaseListObservable<any[]>;

  selectedCharacter;
  ngOnInit(){
    this.characters = this.characterService.getCharacters()
  }

  submitForm(name: string,age: number,gender: string){
    var newCharacter: Character = new Character(name, age, gender, 5);
    this.selectedCharacter = this.characterService.addCharacter(newCharacter);
  }
  selectCharacter(id){
    this.selectedCharacter = this.characterService.findCharacterByID(id)
    //navigate to character_id/character_page
  }

  switch(){
    this.newCharacter = !this.newCharacter
    this.selectedCharacter = null;
  }

  startAdventure(){
    var charId : string;
    this.selectedCharacter.forEach(function(test){
      charId = test.$key
    })
    this.router.navigate([charId,"1"]);
  }
}
