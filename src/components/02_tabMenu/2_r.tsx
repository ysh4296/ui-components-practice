import { useState } from 'react';
import cx from './cx';
import data from './data';

const TabMenu2 = () => {
  const [currentId, setCurrentId] = useState(data[0].id);

  const toggleTab = (id: string) => {
    setCurrentId(id);
  };

  return (
    <>
      <h3>#2. css로 show/hide 처리</h3>
      <div className={cx('container','tabMenu2')}>
        <ul className={cx('tabList')}>
          {data.map(({ id, title }) => (
            <li className={cx('tab', { current: id === currentId })} key={id}>
              <button type="button" onClick={() => toggleTab(id)}>{title}</button>
            </li>
          ))}
        </ul>
        {data.map(({ id, description }) => (
          <div
            key={id}
            className={cx('description', { current: id === currentId })}
          >
            {description}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabMenu2;
