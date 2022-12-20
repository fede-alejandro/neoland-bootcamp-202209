/**
 * Retrieves all public posts (from all users)
 * 
 * @param {string} token The user token
 * 
 */
function retrievePublicPosts(token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new Error('token is empty')

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.onload = function () {
                const { status, responseText: json } = xhr

                if (status >= 500) {
                    const { error } = JSON.parse(json)

                    reject(new Error(error))

                    return
                }

                const posts = JSON.parse(json)

                resolve(posts)
            }
            xhr.onerror = () => reject(new Error('connection error'))

            xhr.open('GET', 'http://localhost/posts/public')
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr.send()
        })

}

export default retrievePublicPosts