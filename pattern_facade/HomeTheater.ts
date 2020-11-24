export default class HomeTheater {
    public type:string;
    public volume:number = 0;

    constructor(type:string = 'default', volume:number = 0) {
        this.type = type;
        this.volume = volume;
        console.log('o pai ta on')
    }

    public volumeUp():number {
        return this.volume = this.volume + 1;
    }

    public volumeDown():number {
        return this.volume = this.volume - 1;
    }

    public setType(type:string):void {
        this.type = type
    }

}