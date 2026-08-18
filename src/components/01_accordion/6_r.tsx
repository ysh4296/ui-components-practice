import { useEffect, useRef, useState } from 'react';
import cx from './cx';
import data from './data';

type AccordionItem = {
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
};

const AccordionItem = ({ title, description, current, toggle }: AccordionItem) => {
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desc = descRef.current;
    desc?.addEventListener('beforematch', toggle);

    return () => {
      desc?.removeEventListener('beforematch', toggle);
    };
  }, [toggle]);

  return (
    <li className={cx('item', 'item3', { current })}>
      <button type="button" className={cx('tab')} onClick={toggle}>{title}</button>
      <div
        className={cx('description')}
        ref={descRef}
        {...{ HIDDEN: current ? undefined : 'until-found' }}
      >
        {description}
      </div>
    </li>
  );
};

const Accordion6 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId(prevId => (prevId === id ? null : id));
  };

  return (
    <>
      <h3>#6. React<sub>hidden=&quot;until-found&quot; + beforematch</sub></h3>
      <ul className={cx('container')}>
        {data.map(({ id, title, description }) => (
          <AccordionItem
            key={id}
            title={title}
            description={description}
            current={id === currentId}
            toggle={toggleItem(id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion6;
