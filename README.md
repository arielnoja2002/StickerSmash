# StickerSmash By Ariel M. Noja

### Introduction - Setup your StickerSmash
Follow this step the step by step instrunction :)

Step 1 - Clone the StickerSmash
```bash
git clone https://github.com/arielnoja2002/StickerSmash.git
```

then
```bash
cd StickerSmash
```

Step 2 - Install packages
```bash
npm install
```

step 3 - Run the app

```bash
npx expo start
```

### Extended Instruction For Building Application for Anroid | IOS

Prerequisite:
- Expo Account
- EAS CLI

Step 1 - Install Eas CLI global
```bash
npm install -g eas-cli
```

Step 2 - Login you Expo Account using this command
```bash
eas login
```

Step 3 - Run build configuration for EAS
```bash
eas build:configure
```

copy this and put to eas.json
```bash
{
  "cli": {
    "version": ">= 16.28.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```

Step 4 - Build The Application Android | IOS

Android
```bash
eas build --platform android --profile preview
```

IOS
```bash
eas build --platform ios --profile preview
```

Or both Android | IOS
```bash
eas build --platform all --profile preview
```

Important Note!
Creating Application for IOS will need Extra configuration e.g(Apple ID credentials)

If building the application encounter a problem go to app.json and remove this part

"eas": {
    "projectId": "08279ff2-2eae-40be-b26c-c808f43d7ff8"
}

## Enjoy and Have Fun :)