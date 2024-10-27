import { default as pagesCollectionDefinition } from '../../../node_modules/pruvious/dist/runtime/collections/standard/pages.collection.js'
export { pagesCollectionDefinition }

import { default as presetsCollectionDefinition } from '../../../node_modules/pruvious/dist/runtime/collections/standard/presets.collection.js'
export { presetsCollectionDefinition }

import { default as previewsCollectionDefinition } from '../../../node_modules/pruvious/dist/runtime/collections/standard/previews.collection.js'
export { previewsCollectionDefinition }

import { default as redirectsCollectionDefinition } from '../../../node_modules/pruvious/dist/runtime/collections/standard/redirects.collection.js'
export { redirectsCollectionDefinition }

import { default as rolesCollectionDefinition } from '../../../node_modules/pruvious/dist/runtime/collections/standard/roles.collection.js'
export { rolesCollectionDefinition }

import { default as seoCollectionDefinition } from '../../../node_modules/pruvious/dist/runtime/collections/standard/seo.collection.js'
export { seoCollectionDefinition }

import { default as uploadsCollectionDefinition } from '../../../node_modules/pruvious/dist/runtime/collections/standard/uploads.collection.js'
export { uploadsCollectionDefinition }

import { default as usersCollectionDefinition } from '../../../node_modules/pruvious/dist/runtime/collections/standard/users.collection.js'
export { usersCollectionDefinition }

import { default as episodesCollectionDefinition } from '../../../packages/data/collections/episodes'
export { episodesCollectionDefinition }

import { default as eventsCollectionDefinition } from '../../../packages/data/collections/events'
export { eventsCollectionDefinition }

import { default as postsCollectionDefinition } from '../../../packages/data/collections/posts'
export { postsCollectionDefinition }

import { default as taxonomiesCollectionDefinition } from '../../../packages/data/collections/taxonomies'
export { taxonomiesCollectionDefinition }

export const collections = {
  'pages': pagesCollectionDefinition,
  'presets': presetsCollectionDefinition,
  'previews': previewsCollectionDefinition,
  'redirects': redirectsCollectionDefinition,
  'roles': rolesCollectionDefinition,
  'seo': seoCollectionDefinition,
  'uploads': uploadsCollectionDefinition,
  'users': usersCollectionDefinition,
  'episodes': episodesCollectionDefinition,
  'events': eventsCollectionDefinition,
  'posts': postsCollectionDefinition,
  'taxonomies': taxonomiesCollectionDefinition,
}
