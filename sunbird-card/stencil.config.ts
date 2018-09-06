import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sunbird-card',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
