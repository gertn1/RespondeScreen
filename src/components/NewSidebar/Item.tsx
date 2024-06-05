import React from 'react';
import Link from './Links';
import Icon from './Icon';
import Label from './Label';

interface ItemProps {
  url: string;
  icon: string;
  label: string;
  isOpen: boolean;
}

const Item: React.FC<ItemProps> = ({ url, icon, label, isOpen }) => {
  return (
    <Link to={url}>
      <Icon icon={icon} isOpen={isOpen} />
      {isOpen && <Label>{label}</Label>}
    </Link>
  );
};

export default Item;
