import React from 'react';
import {Card,Image,Icon} from 'semantic-ui-react';

const ProductCard = ({title,producer,price,image}) => (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{producer}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
      <span>
        <Icon name='rub' />
        {price}
      </span>
    </Card.Content>
    </Card>
  );
  
  export default ProductCard ;
  //a заменено на span  согласно документации