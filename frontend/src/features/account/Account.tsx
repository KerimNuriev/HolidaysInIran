import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import './Account.scss';
import CitiesAdd from './CitiesAdd/CitiesAdd';
import ToursAdd from './ToursAdd/ToursAdd';

function Account(): JSX.Element {
  const admin = useSelector((state: RootState) => state.admin.admin);

  return (
    <div className="container">
      {admin && (
        <Tabs>
          <TabList>
            <Tab>Профиль</Tab>
            <Tab>Добавить/изменить город</Tab>
            <Tab>Добавить/изменить тур</Tab>
            <Tab>Добавить фотографии</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <CitiesAdd />
          </TabPanel>
          <TabPanel>
            <ToursAdd />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      )}
    </div>
  );
}

export default Account;
