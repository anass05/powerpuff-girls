import React from 'react';
import { useNavigate } from 'react-router-dom';
import View from './View';

type Props = {
  title?: string;
  hideBackButton?: boolean;
};

const Navbar: React.FC<Props> = ({ title, hideBackButton }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return <View goBack={goBack} title={title} hideBackButton={hideBackButton} />;
};

export default Navbar;
