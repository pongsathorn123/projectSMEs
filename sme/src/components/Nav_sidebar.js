import React, { Component } from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

class Nav_sidebar extends Component {
    render(){
        return (
            <>
              <Navigation
                  onSelect={({itemId}) => {
                    // maybe push to the route
                  }}
                  items={[
                    {
                      title: 'จัดเรียงตาม',
                      itemId: '/Filter',
                      // you can use your own custom Icon component as well
                      // icon is optional
                      
                    },
                    {
                      title: 'ประเภทธุรกิจ',
                      itemId: '/smesType',
                      
                      subNav: [
                        {
                          title: 'ธุรกิจด้านการผลิต',
                          itemId: '/smesType/projects',
                        },
                        {
                          title: 'ธุรกิจการค้า',
                          itemId: '/smesType/Commerce',
                        },
                        {
                          title: 'ธุรกิจด้านการบริการ',
                          itemId: '/smesType/Service',
                        },
                      ],
                    },
                    {
                      title: 'วันที่โพส',
                      itemId: '/date',
                      subNav: [
                        {
                          title: 'ล่าสุด',
                          itemId: '/date/Newest',
                        },
                        {
                          title: 'เก่าสุด',
                          itemId: '/date/Oldest',
                        },
                      ],
                    },
                  ]}
                />
            </>
          );
      }
    }
    export default Nav_sidebar;