

/**
 * Function to call Param of path URL
 *
 * @param { string } envVar
 * @param { number } id
 * @return { URL }
 */
const readParam = (envVar, id) => {
    let param = envVar.replace('%PARAM%', id);
    param = param.replace('%PUBLIC%', process.env.PUBLIC_URL);
    console.log(param);
    return param;
}

/**
 * Fetch API data or Mock data
 *
 * @param { number } userId
 * @return { data, error }
 */
export async function getUserData(userId) {
    const envUrlUser = `${process.env.REACT_APP_API}${process.env.REACT_APP_GET_USER_DATA}`;
    
    let param = readParam(envUrlUser, userId)

    try {
        const response = await fetch(param)
        const { data } = await response.json()
        return data
    } catch (err) {
        return err
    }
}

export async function getActivitiesData(userId) {
    const envUrlActivity = `${process.env.REACT_APP_API}${process.env.REACT_APP_GET_USER_ACTIVITY}`;

    let param = readParam(envUrlActivity, userId)

    const response = await fetch(param)
    const { data } = await response.json()
    return data
}

export async function getSessionData(userId) {
    const envUrlSessions = `${process.env.REACT_APP_API}${process.env.REACT_APP_GET_USER_SESSIONS}`;
    
    let param = readParam(envUrlSessions, userId)

    const response = await fetch(param)
    const { data } = await response.json()
    return data
}

export async function getPerformanceData(userId) {
    const envUrlPerf = `${process.env.REACT_APP_API}${process.env.REACT_APP_GET_USER_PERFORMANCE}`;
    
    let param = readParam(envUrlPerf, userId)

    const response = await fetch(param)
    const { data } = await response.json()
    return data
}


/**
 * Fetch Mocked Data
 *
 * @param { number } userId
 * @return { data, error }
 */
// export async function getUserData(userId) {
//     try {
//         const response = await fetch(`${process.env.PUBLIC_URL}/user/${userId}/user.json`)
//         const { data } = await response.json()
//         return data
//     } catch (err) {
//         return err
//     }
// }

// export async function getActivitiesData(userId) {
//     const response = await fetch(`${process.env.PUBLIC_URL}/user/${userId}/activity.json`)
//     const { data } = await response.json()
//     return data
// }

// export async function getSessionData(userId) {
//     const response = await fetch(`${process.env.PUBLIC_URL}/user/${userId}/average-sessions.json`)
//     const { data } = await response.json()
//     return data
// }

// export async function getPerformanceData(userId) {
//     const response = await fetch(`${process.env.PUBLIC_URL}/user/${userId}/performance.json`)
//     const { data } = await response.json()
//     return data
// }

/**
 * Fetch API Data
 *
 * @param { number } userId
 * @return { data, error }
 */
// export async function getUserData(userId) {
//     try {
//         const response = await fetch(`http://localhost:3000/user/${userId}`)
//         const { data } = await response.json()
//         return data
//     } catch (err) {
//         return err
//     }
// }

// export async function getActivitiesData(userId) {
//     const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
//     const {data} = await response.json()
//     return data
// }

// export async function getSessionData(userId) {
//     const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
//     const {data} = await response.json()
//     return data
// }

// export async function getPerformanceData(userId) {
//     const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
//     const {data} = await response.json()
//     return data
// }