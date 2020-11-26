import Pizza from './Pizza';

export default class Pepperoni extends Pizza{
    public cost:number;

    constructor(desc:string, cost:number) {
        super()
        this.cost = cost
    }
}