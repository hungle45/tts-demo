import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WebPath } from '../constants/PathConstant.tsx';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: WebPath.HOME,
    label: <Link to={WebPath.HOME}>Home</Link>,
  },
  {
    key: WebPath.SYNTH,
    label: <Link to={WebPath.SYNTH}>Synthesizer</Link>,
  },
  {
    key: WebPath.DEMO,
    label: <Link to={WebPath.DEMO}>Demo</Link>,
  },
  {
    key: WebPath.SURVEY,
    label: <Link to={WebPath.SURVEY}>Survey</Link>,
  },
  {
    key: WebPath.ABOUT,
    label: <Link to={WebPath.ABOUT}>About</Link>,
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
