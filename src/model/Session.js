export default class Sessions {
    /**
     * User Sessions Class
     *
     * @param { number } id
     * @param { array } sessions
     */

    constructor(id, sessions) {
        this.userId = id;
        this.sessions = sessions;
    }
}