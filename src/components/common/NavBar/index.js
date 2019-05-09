import React from 'react';

import { Menu, Icon } from 'antd';
import styled from 'styled-components';

const NavBar = () => (
  <StyledMenu
    mode="horizontal"
    selectedKeys={['list']}
  >
    <Menu.Item key="list">
      <Icon width="40" height="40" type="book" />Книжный агрегатор
    </Menu.Item>
  </StyledMenu>
);

const StyledMenu = styled(Menu)`
  display: flex;
`;



export default NavBar;
