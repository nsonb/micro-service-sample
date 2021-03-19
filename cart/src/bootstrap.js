import faker from 'faker'

const mount = (el) => {
    const message = `<div>You have ${faker.random.number()} items in your cart</div>`
    el.innerHTML = message
}

if(process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#dev-cart-dev-only')
    if(element) mount(element)
    
}

export { mount }