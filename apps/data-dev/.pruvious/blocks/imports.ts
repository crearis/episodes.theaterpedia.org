// @ts-nocheck
import { defineAsyncComponent } from '#imports'

export const blocks = {
  Button: () => defineAsyncComponent(() => import('../../../../packages/theme/blocks/Button.vue')),
  Hero: () => defineAsyncComponent(() => import('../../../../packages/theme/blocks/Hero.vue')),
  PageIntro: () => defineAsyncComponent(() => import('../../../../packages/theme/blocks/PageIntro.vue')),
  Prose: () => defineAsyncComponent(() => import('../../../../packages/theme/blocks/Prose.vue')),
  Video: () => defineAsyncComponent(() => import('../../../../packages/theme/blocks/Video.vue')),
  Preset: () => defineAsyncComponent(() => import('../../../../node_modules/pruvious/dist/runtime/blocks/standard/Preset.vue')),
}
