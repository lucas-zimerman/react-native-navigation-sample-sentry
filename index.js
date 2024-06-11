import { Navigation } from "react-native-navigation";
//import App from './App';
import HomeScreen from "./src/screens/Home";
import SettingsScreen from "./src/screens/Settings";
import { InitSentry } from "./src/sentry"
import Page1Screen from "./src/screens/Page1"
import Page2Screen from "./src/screens/Page2"
import Page3Screen from "./src/screens/Page3"
import Page4Screen from "./src/screens/Page4"
import Page5Screen from "./src/screens/Page5"
import * as Sentry from '@sentry/react-native';

InitSentry();

function MyApp() {

    Navigation.registerComponent('com.myApp.WelcomeScreen', () => HomeScreen);
    Navigation.registerComponent('Settings', () => SettingsScreen);
    Navigation.registerComponent('Page1', () => Page1Screen);
    Navigation.registerComponent('Page2', () => Page2Screen);
    Navigation.registerComponent('Page3', () => Page3Screen);
    Navigation.registerComponent('Page4', () => Page4Screen);
    Navigation.registerComponent('Page5', () => Page5Screen);
    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                    {
                        component: {
                        name: 'com.myApp.WelcomeScreen'
                        }
                    },
                    {
                        component: {
                        name: 'Page1'
                        }
                    },
                    {
                        component: {
                        name: 'Page2'
                        }
                    },
                    {
                        component: {
                        name: 'Page3'
                        }
                    },
                    {
                        component: {
                        name: 'Page4'
                        }
                    },
                    {
                        component: {
                        name: 'Page5'
                        }
                    }
                    ],
                }
            }
        });
    });
}
MyApp();
