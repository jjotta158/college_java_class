import Pizza from './Pizza';

export default abstract class Mozzarella extends Pizza{

    constructor() {
        super()
    }

    public cost():number {
        return 11.90
    }
}