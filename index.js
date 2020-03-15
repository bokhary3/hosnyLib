
import { NativeModules, Platform } from 'react-native';

let { RNCardview } = NativeModules;

// const { RNCardview } = NativeModules;

// export default RNCardview;
const RNCardviewModule = {
    increment() {
        RNCardview.increment();
      },
};

export default RNCardviewModule;
