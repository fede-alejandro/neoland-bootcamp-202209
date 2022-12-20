import { LengthError } from "com/errors"
/**
 * Delete a post against API
 * 
 * @param {string} token The user token
 * @param {string} postId The post postId
 * 
 */
function deletePost(token, postId) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new LengthError('postId is empty')

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.onload = () => {
                const { status } = xhr

                if (status >= 500) {
                    const { error } = JSON.parse(json)

                    reject(new Error(error))

                    return
                }

                resolve()
            }

            xhr.onerror = () => reject(new Error('connection error'))

            xhr.open('DELETE', `http://localhost/posts/${postId}`)
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr.setRequestHeader('Content-Type', 'application/json')

            const payload = { postId }

            const json = JSON.stringify(payload)

            xhr.send(json)
        })
}

export default deletePost