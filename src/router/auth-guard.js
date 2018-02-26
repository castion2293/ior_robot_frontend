export default (to, from, next) => {
    let token = localStorage.getItem('token')

    if (token !== null && token !== 'undefined') {
        next()
    } else {
        localStorage.setItem('original_url', to.path)
        next('/')
    }
}