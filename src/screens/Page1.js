import { styles } from "./Style";
import { View, Text } from 'react-native';
import * as Sentry from '@sentry/react-native';

const Page1Screen = () => {
    return (
      <View style={styles.root}>

      <Text>Page1</Text>
      </View>
    );
  }
  export default Page1Screen;