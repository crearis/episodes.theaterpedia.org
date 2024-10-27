import { default as accountLayout } from './account'
import { default as authLayout } from './auth'
import { default as defaultLayout } from './default'
import { default as blogLayout } from './blog'
import { default as checkoutLayout } from './checkout'
import { default as devLayout } from './dev'
import { default as episodeLayout } from './episode'
import { default as orderLayout } from './order'

export const layouts = {
  'account': accountLayout,
  'auth': authLayout,
  'default': defaultLayout,
  'blog': blogLayout,
  'checkout': checkoutLayout,
  'dev': devLayout,
  'episode': episodeLayout,
  'order': orderLayout,
}
