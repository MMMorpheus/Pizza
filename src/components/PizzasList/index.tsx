import React, {FC} from 'react';
import PizzaCard from '../PizzaCard';
import './pizzaslist.scss'


import { IPizza } from '../../types/types';

interface IPizzasList {
    items: IPizza[]
}

const PizzasList:FC<IPizzasList> = ({items}) => {
  return (
    <ul className='list'>
        {items.map(obj => {
            return <PizzaCard key={obj.id} item={obj} />
        })}
    </ul>
  );
}

export default PizzasList;
