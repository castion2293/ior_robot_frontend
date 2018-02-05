export default (to, from, next) => {
    //console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
        next()
    } else {
        next('/')
    }
}