'use client'
import React from 'react';
import { Button } from '@nutui/nutui-react';

import styles from './index.module.css';

const EventList: React.FC = () => {

    return (
        <div className={styles.container}>
            xiaoju event list
            <Button type='primary'>button</Button>
        </div>
    )
}

export default EventList;