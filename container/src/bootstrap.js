import { mount } from 'products/ProductsIndex';
import { mount as cartMount} from 'cart/CartShow';

const el = document.querySelector('#dev-products')
mount(el)

const element = document.querySelector('#dev-cart')
cartMount(element)