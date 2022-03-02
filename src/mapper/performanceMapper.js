import Performance from '../model/Performance';

export function performanceMapper(json) {
    /**
     * Convert received Json to new class Performance
     *
     * @param { object } json
     * @returns { Performance }
     */
    return new Performance(
        json.userId,
        json.data
    )
}