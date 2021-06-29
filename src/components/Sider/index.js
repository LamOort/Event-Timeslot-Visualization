//Libs
import React from 'react';
import { Layout, Menu } from 'antd';

//Styles
import { css } from '@emotion/css';
import { MenuIcon } from './styled';

const Sider = () => {
  return (
    <Layout.Sider
      theme="light"
      breakpoint="lg"
      className={css`
        position: fixed;
        padding: 0;

        width: 58px !important;
        height: 100vh;

        flex: 0 0 58px !important;
        min-width: 58px !important;
        max-width: 58px !important;

        z-index: 99;

        border-right: 1px solid rgb(243, 243, 243);

        @media only screen and (min-width: 992px) {
          width: 200px !important;
          max-width: 200px !important;
          flex: 0 0 200px !important;
          min-width: 200px !important;

          justify-content: flex-start;
        }
      `}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['event-home']}
        className={css`
          height: 100%;

          padding: 100px 0;
          user-select: none !important;
        `}
      >
        <Menu.Item key="event-home">
          <MenuIcon className="fal fa-home" />
          <span
            className={css`
              @media only screen and (max-width: 991px) {
                display: none !important;
              }
            `}
          >
            Event Home
          </span>
        </Menu.Item>

        <Menu.Item key="people">
          <MenuIcon className="fal fa-users" />
          <span
            className={css`
              @media only screen and (max-width: 991px) {
                display: none !important;
              }
            `}
          >
            People
          </span>
        </Menu.Item>

        <Menu.Item key="schedule">
          <MenuIcon className="fal fa-calendar-check" />
          <span
            className={css`
              @media only screen and (max-width: 991px) {
                display: none !important;
              }
            `}
          >
            Schedule
          </span>
        </Menu.Item>

        <Menu.Item key="stream">
          <MenuIcon className="fal fa-tv-retro" />
          <span
            className={css`
              @media only screen and (max-width: 991px) {
                display: none !important;
              }
            `}
          >
            Stream
          </span>
        </Menu.Item>

        <Menu.Item key="breakout-rooms">
          <MenuIcon className="fal fa-coffee-togo" />
          <span
            className={css`
              @media only screen and (max-width: 991px) {
                display: none !important;
              }
            `}
          >
            Breakout Rooms
          </span>
        </Menu.Item>

        <Menu.Item key="speakers">
          <MenuIcon className="fal fa-keynote" />
          <span
            className={css`
              @media only screen and (max-width: 991px) {
                display: none !important;
              }
            `}
          >
            Speakers
          </span>
        </Menu.Item>

        <Menu.Item key="sponsors">
          <MenuIcon className="fal fa-handshake" />
          <span
            className={css`
              @media only screen and (max-width: 991px) {
                display: none !important;
              }
            `}
          >
            Sponsors
          </span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
