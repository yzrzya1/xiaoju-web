'use client'
import React from 'react';
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
                                    <EventCard />
                                    <EventCard />
                                    <EventCard />
                                    <EventCard />
                                </div>
                            </Tabs.TabPane>
                        )
                    })}
                </Tabs>
            </div>
            <div className={styles.footer}>
                <Tabbar >
                    <Tabbar.Item title="首页" icon={<Home width={18} height={18} />} value={9} />
                    <Tabbar.Item title="分类" icon={<Category width={18} height={18} dot />} />
                    <Tabbar.Item title="发现" icon={<Find width={18} height={18} />} />
                    <Tabbar.Item title="购物车" icon={<Cart width={18} height={18} />} />
                    <Tabbar.Item title="我的" icon={<My width={18} height={18} />} />
                </Tabbar>
            </div>
            
        </div>
    )
}

export default EventList;