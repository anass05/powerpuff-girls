import React from 'react';
import {
  Account,
  Avatar,
  NavbarContainer,
  NavbarContent,
  Title,
} from './styles';
import { Col, Row } from 'antd';
import { URLS } from '../../constants';

type Props = {
  title?: string;
};

const Navbar: React.FC<Props> = ({ title }) => (
  <NavbarContainer>
    <NavbarContent>
      <Row align={'middle'}>
        <Col
          xl={{ span: 6, offset: 1 }}
          md={{ span: 12, offset: 1 }}
          sm={{ span: 16, offset: 1 }}
          xs={{ span: 23, offset: 1 }}
        >
          <Title>{title}</Title>
        </Col>
        <Col
          xl={{ span: 3, offset: 13 }}
          lg={{ span: 4, offset: 6 }}
          md={{ span: 5, offset: 5 }}
          sm={{ span: 6, offset: 0 }}
          xs={{ span: 0, offset: 0 }}
        >
          <Avatar src={URLS.avatar} />
          <Account>Guest User</Account>
        </Col>
      </Row>
    </NavbarContent>
  </NavbarContainer>
);

export default Navbar;
