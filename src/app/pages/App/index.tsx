'use client'
import React from 'react';
import EventList from '@/app/pages/EventList';
import { ConfigProvider } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css'

import styles from './index.module.css';

const theme = {
    nutuiBrandColor: '#007bff',
    nutuiTabsTitlesBackgroundColor: '#ffffff',
};

const App: React.FC = () => {
    return (
        <ConfigProvider theme={theme}>
            <EventList />
        </ConfigProvider>
    )
}

export default App;