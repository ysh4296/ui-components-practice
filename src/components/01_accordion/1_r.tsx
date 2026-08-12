import cx from './cx';
import data from './data';

const Accordion1 = () => {
  return (
    <>
      <h3>#1. React<sub>현재 desc만 렌더링</sub></h3>
      <ul className={cx('container')}>
        {data.map(({ id, title, description }) => (
          <li className={cx('item')} key={id}>
            <button type="button" className={cx('tab')}>{title}</button>
            <div className={cx('description')}>{description}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Accordion1;
