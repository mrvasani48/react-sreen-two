import { sgiApiClient } from "services/sgiApiClient"

async function getAll(params) {
    const url = '/cities'

    const res = await sgiApiClient.get(url, { params })

    return res.data || []
}

export default {
    getAll
}