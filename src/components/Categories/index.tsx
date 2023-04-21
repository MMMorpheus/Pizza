import {FC, useState} from 'react';
import { IFilterOption } from '../../types/types';
import './categories.scss'

export interface ICategories {
  items: IFilterOption[],
  current: IFilterOption,
  change: (i:number) => void
}

const Categories:FC<ICategories> = ({items, current, change}) => {

  return (
    <div>
      <ul className='categories'>
        {items.map((item, i) => {
            return <li className={items.indexOf(current) === i ? 'active' : ''} onClick={() => {change(i)}} key={i}>{item.title}</li>
        })}
      </ul>
    </div>
  );
}

export default Categories;