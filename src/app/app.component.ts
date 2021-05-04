import { Component } from '@angular/core';
import { IAutomovel } from 'src/models/automovel';
import { Carro } from 'src/models/carro';
import { Computador } from 'src/models/computador';
import { CarroModelo } from 'src/models/modelo';
import { Processador } from 'src/models/processador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  automoveis: Array<IAutomovel> = [];

  acelerar() {
    this.automoveis.forEach((auto) => {
      auto.acelerar();
    });

  }
  frear() {
    this.automoveis.forEach((auto) =>{
      auto.frear();
    })
  }
  acenderFarol() {
    this.automoveis.forEach((auto) =>{
      auto.acenderFarol();
    })

  }
  ativarNitro() {
    this.automoveis.forEach((auto)=>{
      auto.ativarNitro();
    })
  }


  constructor() {
    // const computador: Computador = new Computador(new Processador(2.5))
    // console.log(computador)
    let carro_1: Carro;
    carro_1 = new Carro();
    carro_1.modelo = new CarroModelo('Fiat Uno')
    // const carro_2: Carro = new Carro();
    let carro_2 = new Carro();
    carro_2.modelo = new CarroModelo('Fiat Uno');

    if (carro_1 === carro_2) {
      console.log('Carros são iguais')
    } else {
      console.log('Carros são diferentes')
    }

    if (carro_1.modelo === carro_2.modelo) {
      console.log('Modelos são iguais')
    } else {
      console.log('Modelos são diferentes')
    }

    let carro_3: CarroTurbo;
    carro_3 = new CarroTurbo(120);

    this.automoveis.push(carro_1, carro_2, carro_3);
  }
}

class CarroTurbo implements IAutomovel {

  private _velocidade: number;
  private _frear: number;
  private _farol_ativo: boolean;
  private _nitro_ativo: boolean;

  constructor(_velocidade: number) {
    this._velocidade = 0;
    this._frear = 0;
    this._nitro_ativo = false;
    this._farol_ativo = false;
  }

  get velocidade(): number {
    return this.velocidade;
  }
  set velocidade(_velocidade: number) {
    this._velocidade = _velocidade;
  }
  acelerar(): void {
    this._velocidade += 50;
    if (this._velocidade == 150) {
      this._nitro_ativo = true;
    }
  }
  frear(): void {
    this._velocidade = 0;
  }
  acenderFarol(): void {
      
    this._farol_ativo = true;
    
  }
  ativarNitro(): void {
    if(this._nitro_ativo == true){
      this._velocidade += 200;
    }
  }

}


