export default class UserKeyData {
    /**
     * User Key Class
     *
     * @param { number } id
     * @param { number } calories
     * @param { number } protein
     * @param { number } carbohydrate
     * @param { number } lipid
     */
    constructor(id, calories, protein, carbohydrate, lipid) {
        this.userId = id;
        this.calorieCount = calories;
        this.proteinCount = protein;
        this.carbohydrateCount = carbohydrate;
        this.lipidCount = lipid;
    }
}