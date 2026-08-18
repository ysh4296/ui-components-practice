import { useEffect, useRef, useState } from 'react';
import cx from './cx';
import data from './data';

type AccordionItem = {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
  onFound: () => void;
};

const AccordionItem = ({ id, title, description, current, toggle, onFound }: AccordionItem) => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = descriptionRef.current;
    if (!el) return;

    if (current) {
      el.removeAttribute('hidden');
    } else {
      el.setAttribute('hidden', 'until-found');
    }
  }, [current]);

  useEffect(() => {
    const el = descriptionRef.current;
    if (!el) return;

    el.addEventListener('beforematch', onFound);
    return () => el.removeEventListener('beforematch', onFound);
  }, [onFound]);

  return (
    <li className={cx('item', 'item3', { current })} id={id}>
      <button type="button" className={cx('tab')} onClick={toggle}>{title}</button>
      <div ref={descriptionRef} className={cx('description')}>{description}</div>
    </li>
  );
};

const Accordion3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId(prevId => (prevId === id ? null : id));
  };

  return (
    <>
      <h3>#3. React<sub>페이지 내 검색 시 beforematch로 자동 열림</sub></h3>
      <ul className={cx('container')}>
        {data.map(({ id, title, description }) => (
          <AccordionItem
            key={id}
            id={id}
            title={title}
            description={description}
            current={id === currentId}
            toggle={toggleItem(id)}
            onFound={() => setCurrentId(id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion3;
