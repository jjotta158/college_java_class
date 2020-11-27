import CondmentDecorator from './CondimentDecorator'
import Pizza from './Pizza'

export default class CreamCheeseDecorator extends CondmentDecorator{
    constructor (pizza:Pizza) {
        super(pizza)
        this.description = "Isso é cream cheese"
    }

    public cost():number {
        return 1.20;
    }    
}