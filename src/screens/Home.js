import React from 'react';
import { View, Text, Button } from 'react-native';
import * as Sentry from '@sentry/react-native';
import { styles } from './Style'
import { Navigation } from "react-native-navigation";

const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      <Text>Hello React Native Navigation 👋</Text>

      <Button
          title="Try Sentry error!"
          onPress={() => {
            Sentry.captureException(new Error('First error'));
          }}/>
      <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Settings',
            options: {
              topBar: {
                title: {
                  text: 'Settings'
                }
              }
            },
            foo: { bar: true}
          }
        })}/>

    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
}



export default HomeScreen;
