// src/components.d.ts
import XtxGuessVue from './XtxGuess.vue'
import XtxSwiper from './XtxSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuessVue: typeof XtxGuessVue
  }
}
