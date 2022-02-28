import Performance from '../model/Performance';

export function performanceMapper(json) {
    /**
     * Convert received Json to new class performance
     *
     * @param { object } json
     * @returns { new Activities }
     */
    return new Performance(
        json.userId,
        json.data
    )
}