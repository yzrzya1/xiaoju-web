'use client'
import React, { useEffect, useState } from 'react';
import { Tabbar, Tabs } from '@nutui/nutui-react'
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';
import _get from 'lodash/get';
import EventCard from '@/app/components/EventCard';

import styles from './index.module.css';

const tabs = [
    {
        name: 'New',
    },
    {
        name: 'Upcoming',
    },
    {
        name: 'Going',
    },
    {
        name: 'Past',
    },
];

const EventList: React.FC = () => {
    const [eventList, setEventList] = useState([]);
    console.log(eventList);
    
    useEffect(() => {
        fetch('https://k1hpzuueqd.execute-api.us-west-2.amazonaws.com/dev/guest-event-list')
            .then(x => x.json())
            .then((x) => {
                console.log(x);
                const list = _get(x, 'eventHeaders' , []);
                setEventList(list);
            });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                Events
            </div>
            <div className={styles.tabsContainer}>
                <Tabs>
                    {tabs.map((each) => {
                        return (
                            <Tabs.TabPane title={each.name} key={each.name}>
                                <div className={styles.tabPanel}>
                                    {eventList.map(eachE => {
                                        return (
                                            <EventCard detail={eachE} />
                                        )
                                    })}
                                </div>
                            </Tabs.TabPane>
                        )
                    })}
                </Tabs>
            </div>
            <div className={styles.footer}>
                <Tabbar >
                    <Tabbar.Item title="首页" icon={<Home width={18} height={18} />} value={9} />
                    <Tabbar.Item title="分类" icon={<Category width={18} height={18} />} />
                    <Tabbar.Item title="发现" icon={<Find width={18} height={18} />} />
                    <Tabbar.Item title="购物车" icon={<Cart width={18} height={18} />} />
                    <Tabbar.Item title="我的" icon={<My width={18} height={18} />} />
                </Tabbar>
            </div>
            
        </div>
    )
}

export default EventList;