import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const remove = ( id ) => {
    // console.log('attempting to delete: ',id) 
    return axios.delete(`${baseUrl}/${id}`) 
}

const update = (toUpdate, id ) => {
    console.log(id)
    console.log(toUpdate)
    const request = axios.put(`${baseUrl}/${id}`, toUpdate)
    console.log()
    return request.then(response => response.data)
}


export default { getAll, create, remove, update }