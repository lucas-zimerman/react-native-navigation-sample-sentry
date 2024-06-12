import { Navigation } from "react-native-navigation";
//import App from './App';
import * as Sentry from "@sentry/react-native"
import HomeScreen from "./src/screens/Home";
import SettingsScreen from "./src/screens/Settings";
import { InitSentry } from "./src/sentry"
import Page1Screen from "./src/screens/Page1"
import Page2Screen from "./src/screens/Page2"
import Page3Screen from "./src/screens/Page3"
import Page4Screen from "./src/screens/Page4"
import Page5Screen from "./src/screens/Page5"
import { getActiveTransaction, getCurrentHub, startIdleTransaction } from '@sentry/core';

 InitSentry();
 const hub = getCurrentHub();
        
 const span1 = Sentry.startInactiveSpan({ name: '5 seconds timeout', op:'code.timeout' } );

    

Navigation.registerComponent('com.myApp.WelcomeScreen', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Page1', () => Page1Screen);
Navigation.registerComponent('Page2', () => Page2Screen);
Navigation.registerComponent('Page3', () => Page3Screen);
Navigation.registerComponent('Page4', () => Page4Screen);
Navigation.registerComponent('Page5', () => Page5Screen);
    Navigation.events().registerAppLaunchedListener(() => {
        setTimeout(() => {
            Navigation.setRoot({
                root: {
                    bottomTabs: {
                        children: [
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'com.myApp.WelcomeScreen',
                                            },
                                        },
                                    ],
                                    options: {
                                        bottomTab: {
                                            text: 'home',
                                        },
                                    },
                                },
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'Page1',
                                            },
                                        },
                                    ],
                                    options: {
                                        bottomTab: {
                                            text: 'page 1',
                                        },
                                    },
                                },
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'Page2',
                                            },
                                        },
                                    ],
                                    options: {
                                        bottomTab: {
                                            text: 'page 2',
                                        },
                                    },
                                },
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'Page3',
                                            },
                                        },
                                    ],
                                    options: {
                                        bottomTab: {
                                            text: 'Page 3',
                                        },
                                    },
                                },
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'Page5',
                                            },
                                        },
                                    ],
                                    options: {
                                        bottomTab: {
                                            text: 'Page 5',
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            });
        }, 10000); // Correctly place the delay here
});
    