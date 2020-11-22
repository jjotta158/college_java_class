import ArCondicionado from './ArCondicionado';
import BlueRay from './BlueRay'
import CadeiraReclinavel from './CadeiraReclinavel'
import HomeTheater from './HomeTheater'
import Luzes from 'Luzes';
import Pipoqueira from './Pipoqueira'
import Projetor from './Projetor'


class ControleRemoto {
    public arCondicionado:ArCondicionado;
    public blueRay:BlueRay;
    public cadeiraReclinavel:CadeiraReclinavel;
    public homeTheater:HomeTheater;
    public luzes:Luzes;
    public pipoqueira:Pipoqueira;
    public projetor:Projetor;
    
    constructor() {

    }

    public ligar():void {
        this.arCondicionado = new ArCondicionado();
        this.blueRay = new BlueRay();
        this.cadeiraReclinavel = new CadeiraReclinavel();
        this.homeTheater = new HomeTheater();
        this.luzes = new Luzes();
        this.pipoqueira = new Pipoqueira();
        this.projetor = new Projetor();
    }

    public play():void {
        this.projetor.play();
    }

    public stop():void {
        this.projetor.stop();
    }

    public change():void {
        this.projetor.change();
    }

    public setTypeToAdventure():void {
        this.projetor.setType('Adventure')
    }

    public setTypeToRomance():void {
        this.projetor.setType('Romance')
    }

    public setTypeToComedy():void {
        this.projetor.setType('Comedy')
    }

    public setTypeToAction():void {
        this.projetor.setType('Action');
    }

    public setTypeToNovel():void {
        this.projetor.setType('Novel')
    }

    public setTypeToSports():void {
        this.projetor.setType('Sports');
    }

    public configurate(configuration:string, newValue:string):void {
        this.projetor.configuration[configuration] = newValue;
    }

    public voumeUp():number{
        return this.homeTheater.volumeUp
    }

    public volumeDown():number {
        return this.homeTheater.volumeDown
    }

    public setTypeToSamba():void {
        this.homeTheater.setType('Samba');
    }

    public setTypeToRock():void {
        this.homeTheater.setType('Rock');
    }

    public setTypeToClassical():void {
        this.homeTheater.setType('Classical')
    }

    public setTypeToMetal():void {
        this.homeTheater.setType('Metal')
    }



}