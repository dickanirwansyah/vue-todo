import axios from 'axios'

const SERVER_SPRING_BOOT = "http://localhost:8888/";

const instance = axios.create({
    baseURL: SERVER_SPRING_BOOT,
    timeout: 1000
})

/** CRUD API CALL FROM SERVER SPRING BOOT --> 8888 */

export default {
    
    createNew: (text, completed) => instance.post('api/todo', {
        title: text,
        completed: completed
    }),

    getAll: () => instance.get('api/todo', {
        transformResponse: [function (data){
            return data? JSON.parse(data) : data;
        }]
    }),

    updateForId: (id, text, completed) => instance.patch('api/todo'+id, {
        title: text,
        completed: completed
    }),

    removeForId: (id) => instance.delete('api/todo')

}