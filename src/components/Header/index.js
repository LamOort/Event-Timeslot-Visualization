//Libs
import React from 'react';
import { Layout } from 'antd';

//Styles
import { css } from '@emotion/css';

const Header = () => {
  return (
    <Layout.Header
      className={css`
        position: fixed;
        display: flex;

        width: 100%;
        padding: 0;

        background: #fff;
        box-shadow: rgb(0 0 0 / 5%) 0px 2px 2px, rgb(0 0 0 / 5%) 0px 1px 0px;

        z-index: 100;
      `}
    >
      <div
        className={css`
          height: 100%;
          display: flex;

          align-items: center;
          justify-content: center;

          width: 58px;

          border-right: 1px solid rgb(243, 243, 243);

          @media only screen and (min-width: 992px) {
            width: 200px;
            padding-left: 23px;

            justify-content: flex-start;
          } ;
        `}
      >
        <div
          className={css`
            position: relative;
            width: 38px;
            height: 38px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url('https://next.brella.io/static/media/brella-logo-emblem.732a8825.svg');
            cursor: pointer;
            user-select: none;

            @media only screen and (min-width: 992px) {
              background-position: left center;
              background-image: url('https://next.brella.io/static/media/brella-logo.5d2fe585.svg');

              width: 112px;
              height: 15px;
            } ;
          `}
        ></div>
      </div>
    </Layout.Header>
  );
};

export default Header;
