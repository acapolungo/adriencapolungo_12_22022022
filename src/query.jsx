
export async function getUserData(id) {
    const response = await fetch(`${process.env.PUBLIC_URL}/user/${id}.json`)
    const data = await response.json()
    return data
}