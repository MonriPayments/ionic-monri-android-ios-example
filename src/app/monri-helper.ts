import {registerPlugin} from '@capacitor/core';

export interface MonriHelperPlugin {
  createPaymentSession(): Promise<{ client_secret: string }>;
}

const MonriHelper = registerPlugin<MonriHelperPlugin>('MonriHelper');

export default MonriHelper;
