import UserKeyData from '../model/UserKeyData';

export function userKeyDataMapper(json) {
    /**
     * Convert received Json to new class UserScore
     *
     * @param { object } json
     * @returns { UserKeyData }
     */
    return new UserKeyData(
        json.id,
        json.keyData.calorieCount,
        json.keyData.proteinCount,
        json.keyData.carbohydrateCount,
        json.keyData.lipidCount
    );
}