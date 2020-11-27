import CondmentDecorator from './CondimentDecorator'
import Pizza from './Pizza'

export default class OreganoDecorator extends CondmentDecorator{
    constructor (pizza:Pizza) {
        super(pizza)
        this.description = "Isso é orégano"
    }

    public cost():number {
        return 0.50;
    }    
}