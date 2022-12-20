import { LengthError, AuthError, NotFoundError, UnexpectedError, FormatError } from "com/errors"
/**
 * Retrieve an user
 * 
 * @param {string} token The token user 
 * 
 */
function retrieveMyUserProfile(token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')
    
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr
    
            if (status === 200) {
                const user = JSON.parse(json)

                resolve(user)
            } else if (status === 400) {
                const { error } = JSON.parse(json)

                if (error.includes('is not a'))
                    reject(new TypeError(error))
                else if (error.includes('empty'))
                    reject(new FormatError(error))
            } else if (status === 401) {
                const { error } = JSON.parse(json)

                reject(new AuthError(error))
            } else if (status === 404) {
                const { error } = JSON.parse(json)

                reject(new NotFoundError(error))
            } else if (status < 500)
                reject(new UnexpectedError('client error'))
            else
                reject(new UnexpectedError('server error'))
        }

        xhr.onerror = () => reject(new Error('connection error'))
    
        xhr.open('GET', 'http://localhost/users')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.send()
    })
}
    export default retrieveMyUserProfile