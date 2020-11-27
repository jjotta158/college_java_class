import Pizza from './Pizza'

export default abstract class CondimentDecorator extends Pizza{
    private decoratedPizza:Pizza;
    
    constructor(pizza:Pizza) {
        super();
        this.decoratedPizza = pizza;
    }

    public abstract cost():number;
}