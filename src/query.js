

/**
 * Function to call Param of path URL,
 * replace PARAM for API or Mocked data in env.development
 * @param { string } envVar
 * @param { number } id
 * @return { param }
 */
const readParam = (envVar, id) => {
    let param = envVar.replace('%PARAM%', id);
    param = param.replace('%PUBLIC%', process.env.PUBLIC_URL);
    console.log(param);
    return param;
}

/**
 * Fetch promise for user data
 * @param { number } userId
 * @return { data }
 * @return { err }
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

/**
 * Fetch promise for user activity data
 * @param { number } userId
 * @return { data }
 */
export async function getActivitiesData(userId) {
    const envUrlActivity = `${process.env.REACT_APP_API}${process.env.REACT_APP_GET_USER_ACTIVITY}`;

    let param = readParam(envUrlActivity, userId)

    const response = await fetch(param)
    const { data } = await response.json()
    return data
}

/**
 * Fetch promise for user sessions data
 * @param { number } userId
 * @return { data }
 */
export async function getSessionData(userId) {
    const envUrlSessions = `${process.env.REACT_APP_API}${process.env.REACT_APP_GET_USER_SESSIONS}`;
    
    let param = readParam(envUrlSessions, userId)

    const response = await fetch(param)
    const { data } = await response.json()
    return data
}

/**
 * Fetch promise for user performance data
 * @param { number } userId
 * @return { data }
 */
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
 * @return { data }
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
 * @return { data }
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