import { useState } from 'react';
import cx from './cx';
import data from './data';

const TabMenu1 = () => {
  const [currentId, setCurrentId] = useState(data[0].id);

  const currentDescription= data.find((item) => item.id === currentId)?.description || 'No description available';

  const toggleTab = (id: string) => {
    setCurrentId(id);
  };

  return (
    <>
      <h3>#1. React</h3>
      <div className={cx('container')}>
        <ul className={cx('tabList')}>
          {data.map(({ id, title }) => (
            <li className={cx('tab', { current: id === currentId })} key={id}>
              <button type="button" onClick={() => toggleTab(id)}>{title}</button>
            </li>
          ))}
        </ul>
        <div className={cx('description')}>{currentDescription}</div>
      </div>
    </>
  );
};

export default TabMenu1;
