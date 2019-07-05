import {combineReducers} from 'redux'; //соединяем Reducers в одно целое
//import 'semantic-ui-css/semantic.min.css';
import products from './products';
import cart from './cart';


export default combineReducers({
    products:products,
    cart:cart

});