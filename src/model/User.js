export default class User {
    /**
     * User informations Class
     *
     * @param { number } id
     * @param { string } firstName
     * @param { string } lastName
     * @param { number } age
     * @param { number } todayScore
     */
    constructor(id, firstName, lastName, age, todayScore) {
        this.userId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.todayScore = todayScore;
    }
}