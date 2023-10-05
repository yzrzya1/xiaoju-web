'use client'
import React from 'react';
import { Avatar, Image } from '@nutui/nutui-react';
import { EVENT_IMG_PREFIX, EVENT_CREATOR_PROFILE_IMG_PREFIX } from '@/app/constant';
import _get from 'lodash/get';

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
    'https://s3-us-west-2.amazonaws.com/skyline-event-photos/ORG-dev-bd81c4ef-e4a416963910333221076.jpg';


interface Props {
    detail: Object;
}
      
const EventList: React.FC<Props> = (props) => {
    const detail = _get(props, 'detail' , {});
    console.log(detail);
    
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