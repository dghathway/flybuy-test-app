import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.qdoba.dev',
  appName: `Qdoba`,
  bundledWebRuntime: true,
  webDir: 'www',
  plugins: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CapFlyBuy: {
      flybuyIosApiKey: '130.i5tjmeaQuRRJVFqKdrhDnEeF',
      flybuyAndroidApiKey: '131.iP2zWd8hCCnJEJV3NQqVuDD1'
    }
  }
};

export default config;
