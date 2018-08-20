// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyC-ySd8OHTjh4t5YnnLGnQyeGnhWwWaQbc',
      authDomain: 'ekart-212705.firebaseapp.com',
      databaseURL: 'https://ekart-212705.firebaseio.com',
      projectId: 'ekart-212705',
      storageBucket: 'ekart-212705.appspot.com',
      messagingSenderId: '770089408937'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
