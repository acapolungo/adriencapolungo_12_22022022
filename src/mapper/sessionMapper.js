import Sessions from "../model/Session";

export function sessionMapper(json) {
    /**
     * Convert received Json to new class Sessions
     *
     * @param { object } json
     * @returns { Sessions }
     */
    return new Sessions(
        json.userId,
        json.sessions
    );
}