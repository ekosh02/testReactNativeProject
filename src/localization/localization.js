// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

export let strings = new LocalizedStrings({
 en:{
   hi:"Hi!"
 },
 kz:{
    hi:"Сәлем!"
 },
 ru: {
    hi:"Привет!"
 }
});