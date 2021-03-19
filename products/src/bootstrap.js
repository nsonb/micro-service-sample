import faker from 'faker'

const mount = (element) => {
    let products = '';

    for(let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products+=`<div>${name}</div>`    
    }
    element.innerHTML = products
}

export { mount }

// for mounting the innerHTML in isolation for testing
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products-dev-only');
    if(el) {
        mount(el)
    }
}