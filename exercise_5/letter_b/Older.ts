import Immobile from '../Immobile'

export default class Older extends Immobile {
    haveGarden: boolean
    haveCellar: boolean

    constructor(alias: string, price: number, haveGarden: boolean, haveCellar: boolean) {
        super(alias, price)
        this.haveGarden = haveGarden
        this.haveCellar = haveCellar
    }

    public getHaveCellar(): boolean {
        return this.haveCellar
    }

    public getHaveGarden(): boolean {
        return this.haveGarden
    }

    public setHaveCellar(haveCellar: boolean) {
        this.haveCellar = haveCellar
    }

    public setHaveGarden(haveGarden: boolean): void {
        this.haveGarden = haveGarden
    }
}