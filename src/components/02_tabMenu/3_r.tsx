import { useState } from 'react';
import cx from './cx';
import data from './data';

const TabMenu3 = () => {
  const [currentId, setCurrentId] = useState(data[0].id);

  const toggleTab = (id: string) => {
    setCurrentId(id);
  };

  return (
    <>
      <h3>#3. css animation 처리</h3>
      <div className={cx('container', 'tabMenu3-1')}>
        <ul className={cx('tabList')}>
          {data.map(({ id, title }) => (
            <li className={cx('tab', { current: id === currentId })} key={id}>
              <button type="button" onClick={() => toggleTab(id)}>{title}</button>
            </li>
          ))}
        </ul>
        <div className={cx('tabPanel')}>
          {data.map(({ id, description }) => (
            <div
              key={id}
              className={cx('description', { current: id === currentId })}
            >
              {description}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabMenu3;
