import Pizza from './Pizza';

export default class Mozzarella extends Pizza{
    public cost:number;

    constructor(desc:string, cost:number) {
        super()
        this.cost = cost
    }
}