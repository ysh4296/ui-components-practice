import { useEffect, useRef, useState } from 'react';
import cx from './cx';
import data from './data';

type TabPanelProps = {
  current: boolean;
  description: string;
};

const TabPanel = ({ current, description }: TabPanelProps) => {
  const [animationClassName, setAnimationClassName] = useState('');
  const initRef = useRef(false);

  useEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      return;
    }
    setAnimationClassName(current ? 'enter' : 'exit');
  }, [current]);

  return (
    <div className={cx('description', animationClassName, { current })}>
      {description}
    </div>
  );
};

const TabMenu3_2 = () => {
  const [currentId, setCurrentId] = useState(data[0].id);

  const toggleTab = (id: string) => {
    setCurrentId(id);
  };

  return (
    <>
      <h3>#3-2. React<sub>초기 렌더링 애니메이션 방지</sub></h3>
      <div className={cx('container', 'tabMenu3-2')}>
        <ul className={cx('tabList')}>
          {data.map(({ id, title }) => (
            <li className={cx('tab', { current: id === currentId })} key={id}>
              <button type="button" onClick={() => toggleTab(id)}>{title}</button>
            </li>
          ))}
        </ul>
        <div className={cx('tabPanel')}>
          {data.map(({ id, description }) => (
            <TabPanel key={id} current={id === currentId} description={description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TabMenu3_2;
