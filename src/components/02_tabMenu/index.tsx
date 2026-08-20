import TabMenu1 from './1_r';
import TabMenu2 from './2_r';
import TabMenu3 from './3_r';
import TabMenu3_2 from './3-2_r';
import cx from './cx';

const TabMenus = () => (
  <div className={cx('TabMenus')}>
    <h2>탭메뉴</h2>

    <TabMenu1 />
    <TabMenu2 />
    <TabMenu3 />
    <TabMenu3_2 />
  </div>
);

export default TabMenus;
