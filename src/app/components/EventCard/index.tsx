'use client'
import React from 'react';
import { Avatar, Image } from '@nutui/nutui-react';

import styles from './index.module.css';

const sampleData = {
    orgName: '湾区周末小聚',
    title: '十月395公路追枫小队',
    createdTime: '18 hrs ago',
    content: '395公路是加州最著名的赏秋地点，十月又是最佳观赏日期， 我们讲花三天两夜一起自驾秋游，无论你...',
    eventStartTime: '6:00 PM, Friday, October 20',
    eventEndTime: '8:00 PM, Sunday, October 22',
    location: 'Lake Tahoe',
};
const avatarSrc =
    'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png';
const imgSrc =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg';

const EventList: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.orgAvatar}>
                    <Avatar 
                        size="small"
                        src={avatarSrc}
                    />
                </div>
                <div className={styles.orgName}>
                    {sampleData.orgName}
                </div>
                <div className={styles.createdTime}>
                    {sampleData.createdTime}
                </div>
            </div>
            <div className={styles.image}>
                <Image 
                    src={imgSrc} 
                    width="100%" 
                    height='150' 
                    fit="contain"
                />
            </div>
            <div className={styles.content}>
                {sampleData.content}
            </div>
            <div className={styles.time}>
                {sampleData.eventStartTime} - {sampleData.eventEndTime}
            </div>
            <div className={styles.location}>
                {sampleData.location}
            </div>
            <div className={styles.attendance}>
                18 17
            </div>
        </div>
    )
}

export default EventList;