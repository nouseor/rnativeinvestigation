Using npm version 4.3.0 react-native-cli version 2.01 react-native version 0.49.5

In the project directory,

mkdir android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
react-native run-android
The file name has changed from index.android.js to index.js