import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WEB_PATH } from '../constants/PathConstant.tsx';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: WEB_PATH.HOME,
    label: <Link to={WEB_PATH.HOME}>Home</Link>,
  },
  {
    key: WEB_PATH.DEMO,
    label: <Link to={WEB_PATH.DEMO}>Demo</Link>,
  },
  {
    key: WEB_PATH.SURVEY,
    label: <Link to={WEB_PATH.SURVEY}>Survey</Link>,
  },
];

const NavBar = () => {
  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      theme="dark"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};

export default NavBar;
