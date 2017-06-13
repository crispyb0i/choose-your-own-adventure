import { Injectable } from '@angular/core';
import { Character } from './character.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {

  characters: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
  }

  getCharacters(){
    return this.characters;
  }

  addCharacter(character){
    var test = this.characters.push(character);
    return this.findCharacterByID(test.key)
  }

  findCharacterByID(id){
    return this.database.object('characters/'+id);
  }

}
