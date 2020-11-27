import Pizza from './Pizza';

export default abstract class Pepperoni extends Pizza{

    constructor() {
        super()
    }

    public cost():number {
        return 11.90
    }
}