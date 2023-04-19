import * as React from 'react';
import './categories.scss'

export interface IAppProps {
}

export default function Categories (props: IAppProps) {
    const categories: string[] = ['Усі', 'М\'ясні', 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті']

    const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <div>
      <ul className='categories'>
        {categories.map((item, i) => {
            return <li className={currentIndex === i ? 'active' : ''} onClick={() => {setCurrentIndex(i)}} key={i}>{item}</li>
        })}
      </ul>
    </div>
  );
}
