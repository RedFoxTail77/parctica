import React from 'react';
import {Menu} from 'semantic-ui-react';

const MenuCoponent= () => (
    <Menu>
    <Menu.Item name='browse'  onClick={this.handleItemClick}>
     Магазин
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item name='signup'  onClick={this.handleItemClick}>
        Итого:&nbsp;<b>0</b>руб.
      </Menu.Item>

      <Menu.Item name='help'  onClick={this.handleItemClick}>
        Корзина
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);
export default MenuCoponent;