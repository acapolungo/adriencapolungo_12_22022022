import Activities from '../model/Activities';

export function activitiesMapper(json) {
    /**
     * Convert received Json to new class Activities
     *
     * @param { object } json
     * @returns { Activities }
     */
    return new Activities(
        json.userId,
        json.sessions
    );
}