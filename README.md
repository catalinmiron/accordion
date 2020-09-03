# The CMH Clients
---
## Development Prequisites

* [homebrew](https://brew.sh/) (only for macOS - not required but makes things easier)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  * Recommendation: manage npm version via [nvm](https://github.com/nvm-sh/nvm)
* expo-cli `npm install -g expo-cli`
* [watchman](https://facebook.github.io/watchman/docs/install.html) (only required for macOS - optional for Linux)

Use `expo start` inside the root directory of the Project to start the metro bundler for development. Most of these Programs are available on some package management software (apt, brew, etc.) so it is - again - strongly recommended to use one of them.

## Building App Packages

### Prequisites

In addition to the development prequisites you will need the following software:
* turtle cli ```npm install -g turtle-cli```
* python3 (Install with your preferred method)
* [java8 JDK](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html) (only Android development)
  * Java __*8*__ is required here. Builds may fail with newer versions of java. The usage of package management for the installation package is recommended for [mac](https://github.com/AdoptOpenJDK/homebrew-openjdk) and [linux](https://openjdk.java.net/install/).
* [Xcode](https://apps.apple.com/us/app/xcode/id497799835) (only iOS development)
* [fastlane](https://docs.fastlane.tools/getting-started/ios/setup/#installing-fastlane) (only iOS development) 

### Configuration

#### General
You need to configure the path to the root project directory on your file system in .env
```bash
SOURCE_DIRECTORY=/path/to/project
```

#### Android

You will need a keystore.jks and the credentials for it. For testing purposes you can create your own keystore with:
`keytool -genkeypair -v -keystore keystore.jks -alias keyalias -keyalg RSA -keysize 2048 -validity 9125`

You the need to configure the following values in the .env file of the project root:
```bash
# The keystore password and key password are the same unless specified differently
EXPO_ANDROID_KEYSTORE_PASSWORD="securePassword"
EXPO_ANDROID_KEY_PASSWORD="securePassword"
# The location to your keystore.jks - usually it is in your root directory
EXPO_ANDROID_KEYSTORE_LOCATION=/path/to/keystore
# The alias name of your keystore.jks
EXPO_ANDROID_KEYSTORE_ALIAS="goodAlias"
```
This will create a keystore with the alias "keyalias" and the password you enter.

#### iOS

Unfortunately unlike Android you can't fake build credentials for iOS so you have to get real ones from the CMH developer account even for testing.

You will need a `.p12` certificate and a `.mobileprovision` file. Both of these need to be created for App Store provisioning. You also need a developer certificate from the CMH developer account and install this on your mac.

You the need to configure the following values in the .env file of the project root:
```bash
# The password for the .p12 certificate.
# You should configrue a password since turtle can't correctly handle certificates with no passwords
EXPO_IOS_DIST_P12_PASSWORD="securePassword"
# The location of your p12 certificate
EXPO_IOS_DIST_P12_FILE=/path/to/certificat.p12
# The location of your .mobileprovision file
EXPO_IOS_PROVISION_FILE=/path/to/app.mobileprovision
# The team ID of the CMH developer account
EXPO_IOS_TEAM_ID="CoolDevId"
```

### Building

Execute the build scripts for the respective app:

`./android_build.sh` or `./ios_build.sh`

## Debugging

### Chrome Webworker

If you just want a quick way to debug the application without any extra tools this can be done with the regular debugger UI. To open this you need to first run the application on a device (emulator or real) and then shake it or simulate the shake input on emulator. This will open up the developer menu on which you need to press the `debug` option.

This will open up a webpage on your chrome browser at an address that looks something like `http://localhost:19001/debugger-ui/` (19001 is the standard port for the expo debugger). On this page you can now use the browser developer tools to debug the javascript code of the app like any webpage. Keep in mind that the actual sources of your app in the `Sources` tab of your chrome browser are *not* found under localhost:somePort and instead are located under debuggerWorker.someHash.js since the debugger of your app runs in a webWorker.

### React Native Debugger

Since aside from js debuging you may want to see app logging or inspect elements you'll need to install the react native debugger since it does exactly that.
You can download the latest release [here](https://github.com/jhen0409/react-native-debugger/releases) but there is also a cask available if you use homebrew.
Right after opening the debugger you need to open a new window (macOS: `Command+T`, Linux/Windows: `Ctrl+T`) since the debugger listens to port `8081` by default and the default expo debug port is `19001`.

After that you can connect the debugger the same way as in chrome - shake the device to open the developer menu and then select the `debug` option and the devici9e should connect with your react native debugger. Keep in mind, that you *cannot* use both the chrome debbugger and the react native debugger at the same time so you need to close all instances of one if you want to use the other.

## Testing

We are using the following test modules:
* [jest](https://jestjs.io/docs/en/getting-started)
* [rect test renderer](https://reactjs.org/docs/test-renderer.html)
* [react testing library](https://testing-library.com/docs/react-testing-library/intro)

The most common ones that you are going to use are jest and the test renderer with the testing library for cases where the former two are insufficient.

As a basic rule the tests should be placed in a `__tests__` folder on the same level as the test subject. You should also place a `.test` before the file extension.

Example:

You wrote a component named `simpleButton.tsx` and placed it in `src/components/simpleButton/simpleButton.tsx` so when you create a test for your component it should be placed in `src/component/simpleButton/__tests__/` and be named `simpleButton.test.tsx`.

```
src/
├─ components/
   ├─ simpleButton/
      ├─ __tests__/
        └ simpleButton.test.tsx
      └ simpleButton.tsx
```

### Snapshot test

The most common test you are going to write is the snapshot test. This test first takes a snapshot of the `dom` of your component/screen/... etc. Everytime it is run after that it checks if the rendered dom via `react text renderer` matches the snapshot to ensure that it still looks like it supposed to look (correct styles, correct components being rendered etc.).
You can read up on how snapshot tests work [here](https://jestjs.io/docs/en/snapshot-testing).
Keep in mind that you should check in the generated snapshot `.snap` files and only update them if the corresponding views change to ensure a consistent testing.

To update snapshots you can run `yarn updateSnapshots`.

### Running tests

To run the automated tests simply execute `yarn testFinal` inside the project root directory. If you don't want code coverage statistics with every test you can run `yarn test` - this will also start testing in `watch` mode so it runs tests every time you change the code. If you only care about tests of your current development you can use `yarn testDebug` - this will also run in watch mode but only runs test on the files you changed.