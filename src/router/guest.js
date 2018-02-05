import { store } from '../store/index'

export default (to, from, next) => {
    //console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
        store.commit('autoSignIn', localStorage.getItem('token'))
        next('/dashboard')
    } else {
        next()
    }
}