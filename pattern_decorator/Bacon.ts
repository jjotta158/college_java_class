import CondmentDecorator from './CondimentDecorator'
import Pizza from './Pizza'

export default class BaconDecorator extends CondmentDecorator{
    constructor (pizza:Pizza) {
        super(pizza)
        this.description = "Isso é bacon"
    }

    public cost():number {
        return 0.80;
    }    
}