import * as Sentry from '@sentry/react-native'
import { Platform } from 'react-native';
import { Navigation } from "react-native-navigation";

export function InitSentry() {

    const reactNavigationInstrumentation =
    new Sentry.ReactNativeNavigationInstrumentation( Navigation, {
        routeChangeTimeoutMs: 10000, // How long it will wait for the route change to complete. Default is 1000ms
        enableTimeToInitialDisplay: true,
    });

    Sentry.init({
    dsn: 'https://1df17bd4e543fdb31351dee1768bb679@o447951.ingest.us.sentry.io/5428561',
    tracesSampleRate: 1.0,
    debug: true,
    integrations: [
        new Sentry.ReactNativeTracing({
        // The time to wait in ms until the transaction will be finished, For testing, default is 1000 ms
        finalTimeoutMs: 600000,
        routingInstrumentation: reactNavigationInstrumentation,
        enableUserInteractionTracing: true,
        ignoreEmptyBackNavigationTransactions: false,
        enableStallTracking: true,

        }),
    ],
    // uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // enableSpotlight: __DEV__,
    });
}