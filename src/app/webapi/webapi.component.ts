import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
})
export class WebapiComponent {

  pokemonName: string;
  pokemonSpecies: any;
  pokemon: any;

  constructor() { }

  async getPokemonInfo(){
    const pokeName = this.pokemonName;
    const name = pokeName.toLowerCase();
    if (!name ||name === '') {
      console.log('name is invalid');
      return;
    }
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => this.pokemon = data);
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then((response) => response.json())
      .then((data) => this.pokemonSpecies = data);
    return;
  }

}
