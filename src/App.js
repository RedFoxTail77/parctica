import  React, {Component} from 'react';
import {connect} from 'react-redux';// для подключения к определенному компоненту самого состояния
import {setProducts} from './actions/products';
//import {Container} from '/semantic-ui-react';
//import {Card} from '/semantic-ui-react';
import axios from 'axios';
//import Menu from './components/Menu';
//import ProductCard from './components/ProductCard';
//import Button from '@material-ui/core/Button';


class App extends Component{
  componentWillMount(){
    const {setProducts}=this.props;
    axios.get('/products.json').then(({data})=>{
    setProducts(data);
    });
    
  }
  
  render(){
    const {products,isReady}=this.props;
    
    return(
      
      <ul>
      {!isReady
      ?'Загрузка...'
      :products.map(products=>(
          <li>
            <b>{products.title}</b>-{products.producer}
          </li>
        ))
      }
      </ul>
    );
  }
}
const mapStateToProps = ({products}) =>({
products:products.items,
isReady:products.isReady
});
const mapDispathToProps=dispatch =>({
setProducts:products =>dispatch(setProducts(products))
});



export default connect(mapStateToProps,mapDispathToProps)(App);// поменяла mapStateToProps на mapDispathToProps