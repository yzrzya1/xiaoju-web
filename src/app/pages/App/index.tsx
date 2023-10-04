'use client'
import React from 'react';
import EventList from '@/app/pages/EventList';
import '@nutui/nutui-react/dist/style.css'

import styles from './index.module.css';

const App: React.FC = () => {

    return (
        <div>
            <EventList />
        </div>
    )
}

export default App;