import { Platform } from 'react-native'

const fontSetup = {
  openSans: {
    light: {
      android: "font-family: 'OpenSans-Light';",
      ios: "font-family: 'Open Sans';font-weight: light;"
    },
    regular: {
      android: "font-family: 'OpenSans-Regular';",
      ios: "font-family: 'Open Sans';"
    },
    semibold: {
      android: "font-family: 'OpenSans-Semibold';",
      ios: "font-family: 'Open Sans';font-weight: semibold;"
    },
    bold: {
      android: "font-family: 'OpenSans-Bold';",
      ios: "font-family: 'Open Sans';font-weight: bold;"
    }
  },
  galano: {
    bold: {
      android: "font-family: 'GalanoGrotesqueAlt-Bold';",
      ios: "font-family: 'GalanoGrotesqueAlt-Bold';"
    }
  }
}

export default {
  openSansLight: fontSetup.openSans.light[Platform.OS],
  openSansRegular: fontSetup.openSans.regular[Platform.OS],
  openSansSemibold: fontSetup.openSans.semibold[Platform.OS],
  openSansBold: fontSetup.openSans.bold[Platform.OS],
  galanoBold: fontSetup.galano.bold[Platform.OS]
}
