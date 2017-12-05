// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAYM5C3-HsluJpWqXujfcb0JWrQj1nl8b4",
    authDomain: "arcloud-udg.firebaseapp.com",
    databaseURL: "https://arcloud-udg.firebaseio.com",
    projectId: "arcloud-udg",
    storageBucket: "arcloud-udg.appspot.com",
    messagingSenderId: "705404954421"
  }
};
