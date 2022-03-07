import User from '../model/User';

export function userMapper(json) {
    /**
     * Convert received Json to new class User
     *
     * @param { object } json
     * @returns { User }
     */
    return new User(
        json.id,
        json.userInfos.firstName,
        json.userInfos.lastName,
        json.userInfos.age,
        json.todayScore
    );
}