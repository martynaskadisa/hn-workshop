import React from 'react';
import { useTypedSelector } from './use-typed-selector';

interface Props {
  id: number;
}

const Item: React.FC<Props> = ({ id }) => {
  const item = useTypedSelector(state => state.items.items.find(x => x.id === id));

  if (!item) {
    return null;
  }
  
  return (
    <div>{item.title}</div>
  )
};

export default Item;