import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import i18n from 'i18n-js';
import { Home } from '../../screens/Home';
import { Archive } from '../../screens/Archive';
import { Search } from '../../screens/Search';
import { Live } from '../../screens/Live';
import { Colors } from '../../BaseStyles';

const Tab = createBottomTabNavigator();

export class BottomNavigator extends React.Component {
  render(): ReactElement {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: Colors.ebony,
          inactiveBackgroundColor: Colors.ebony,
          inactiveTintColor: Colors.osloGray,
          activeTintColor: 'white',
          style: {
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: i18n.t('navigation.item.home'),
            tabBarIcon: ({ color, size }): ReactElement => <FontAwesome name="home" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="archive"
          component={Archive}
          options={{
            tabBarLabel: i18n.t('navigation.item.archive'),
            tabBarIcon: ({ color, size }): ReactElement => (
              <FontAwesome name="window-restore" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="live"
          component={Live}
          options={{
            tabBarLabel: i18n.t('navigation.item.live'),
            tabBarIcon: ({ color, size }): ReactElement => <FontAwesome name="tv" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarLabel: i18n.t('navigation.item.search'),
            tabBarIcon: ({ color, size }): ReactElement => <FontAwesome name="search" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    );
  }
}
