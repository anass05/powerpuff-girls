import React from 'react';
import { Account, Avatar, Item, NavbarContainer, NavbarContent, Title } from './styles';
import { Col, Row } from 'antd';
import { URLS } from '../../constants';

const Navbar: React.FC = () => (
  <NavbarContainer>
    <NavbarContent>
      <Row align={'middle'}>
        <Col xl={{ span: 4, offset: 1 }}>
          <Title>PowerPuff Girls</Title>
        </Col>
        <Col xl={{ span: 2 }}>
          <Item>Home</Item>
        </Col>
        <Col xl={{ span: 2, offset: 14 }}>
          <Avatar src={URLS.avatar} />
          <Account>Guest User</Account>
        </Col>
      </Row>
    </NavbarContent>
  </NavbarContainer>
);

export default Navbar;