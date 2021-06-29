//Libs
import React from 'react';
import { Layout, Table } from 'antd';
import { formatDateAndLocalize } from '../../utils/day';

//Components
import Header from '../../components/Header';
import Sider from '../../components/Sider';

//Styles
import { css } from '@emotion/css';
import { PageBlockWrapper } from './styled';

//Hooks
import useTimeSlot from '../../modules/timeslot/hooks/useTimeSlot';

const { Content } = Layout;

const LandingPage = () => {
  const { timeSlotsData, loading } = useTimeSlot();
  console.log(timeSlotsData);

  const columns = [
    {
      title: 'Event Title',
      render: (el) => {
        if (el.attributes.title === '' || !el.attributes.title) {
          return 'sippping ☕️ , title is empty 🥲';
        } else return <strong>{el.attributes.title}</strong>;
      },
    },
    {
      title: 'Start Time (localized)',
      render: (el) =>
        formatDateAndLocalize(
          el.attributes['start-time-in-time-zone'],
          'MMMM D, YYYY h:mm A',
        ),
      width: '15%',
    },
    {
      title: 'End Time (localized)',
      render: (el) =>
        formatDateAndLocalize(
          el.attributes['end-time-in-time-zone'],
          'MMMM D, YYYY h:mm A',
        ),
      width: '15%',
    },

    {
      title: 'Description',
      render: (el) => (
        <>
          {!el.attributes.content && 'no description'}
          {el.attributes.content &&
            el.attributes.content.blocks.map((block, index) => (
              <p key={index}>{block.text}</p>
            ))}
        </>
      ),
      width: '40%',
    },
  ];

  return (
    <Layout
      className={css`
        width: 100%;
      `}
    >
      <Header />

      <Layout
        className={css`
          width: 100%;
          background: #fff;
        `}
      >
        <Sider />

        <Content
          className={css`
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: flex-end;

            padding: 100px 0;
          `}
        >
          <PageBlockWrapper>
            <Table
              dataSource={timeSlotsData}
              columns={columns}
              rowKey={(el) => el.id}
              loading={loading}
              bordered
            />
          </PageBlockWrapper>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LandingPage;
