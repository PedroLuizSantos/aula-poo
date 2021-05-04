import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));


function fna(parm1: string, parm2: string) {
  return parm1 + parm2
}

const a = (parm1: string, parm2: string) => {
  parm1 + parm2
}

fna('', '')