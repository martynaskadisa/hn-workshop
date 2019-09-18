import React, { useEffect } from 'react';
import Item from './item';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsStart } from './store/modules/items/actions';
import { useTypedSelector } from './use-typed-selector';


const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useTypedSelector(state => state.items.isLoading);
  const items = useTypedSelector(state => state.items.items);

  useEffect(() => {
    dispatch(fetchItemsStart())
  }, []);

  if (isLoading) {
    return <div>Loading, hold tight!</div>
  }

  return (
    <div>
      {items.map(item => (
        <Item key={item.id} id={item.id} /> 
      ))}
    </div>
  )
};

export default Feed;