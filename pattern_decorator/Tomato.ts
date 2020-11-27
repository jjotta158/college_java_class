import CondmentDecorator from './CondimentDecorator'
import Pizza from './Pizza'

export default class TomatoDecorator extends CondmentDecorator{
    constructor (pizza:Pizza) {
        super(pizza)
        this.description = "Isso é tomate"
    }

    public cost():number {
        return 0.10;
    }    
}