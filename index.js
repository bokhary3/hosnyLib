
import { NativeModules, Platform } from 'react-native';

const { RNCardview } = NativeModules;

// export default RNCardview;

if (Platform === "ios") {
    module.exports = {
        increment: function() {
            RNCardview.increment();
        }
    }
}