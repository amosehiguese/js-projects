import get from './utils/getElement'
import getUser from './utils/fetchUser'
import displayUser from './utils/displayUser'

const btn = get('.btn')

const showUser = async () => {
    const person = await getUser()
    displayUser(person)
}

window.addEventListener("DOMContentLoaded", showUser)
btn.addEventListener("click", showUser)