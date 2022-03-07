export default class Activities {
    /**
     * User Activities Class
     *
     * @param { number } id
     * @param { array } sessions
     */
    constructor(id, sessions) {
        this.userId = id;
        this.sessions = sessions;
    }
}