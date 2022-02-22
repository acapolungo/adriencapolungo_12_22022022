
export async function getUserData({userId}) {
    const response = await fetch(`${process.env.PUBLIC_URL}/user/${userId}/user.json`)
    const {data} = await response.json()
    return data
}