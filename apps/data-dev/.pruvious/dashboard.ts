// @ts-nocheck
import { defineAsyncComponent } from '#imports'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/clipboard'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/collection-language'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/confirm-click'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/dashboard'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/dialog'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/fetch-count'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/hotkeys'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/media'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/move'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/redirects-test'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/search'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/toaster'

export * from '../../../node_modules/pruvious/dist/runtime/composables/dashboard/unsaved-changes'

export const dashboardCollectionsOverviewComponentImport = () => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/CollectionsOverview.vue')
export const dashboardCollectionsOverviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/CollectionsOverview.vue'))

export const dashboardCollectionsRecordComponentImport = () => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/CollectionsRecord.vue')
export const dashboardCollectionsRecordComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/CollectionsRecord.vue'))

export const dashboardHeadComponentImport = () => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Head.vue')
export const dashboardHeadComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Head.vue'))

export const dashboardHeaderLogoComponentImport = () => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/HeaderLogo.vue')
export const dashboardHeaderLogoComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/HeaderLogo.vue'))

export const dashboardInstallComponentImport = () => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Install.vue')
export const dashboardInstallComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Install.vue'))

export const dashboardLoginComponentImport = () => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Login.vue')
export const dashboardLoginComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Login.vue'))

export const dashboardLoginLogoComponentImport = () => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/LoginLogo.vue')
export const dashboardLoginLogoComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/LoginLogo.vue'))

export const dashboardLogoutComponentImport = () => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Logout.vue')
export const dashboardLogoutComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Logout.vue'))

export const dashboardMediaComponentImport = () => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Media.vue')
export const dashboardMediaComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/dashboard/Media.vue'))

export const dashboardMiscComponentImport = {
  'AddBlockPopup': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/AddBlockPopup.vue'),
  'Base': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/Base.vue'),
  'BlockTreeItem': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/BlockTreeItem.vue'),
  'BooleanFieldPreview': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/BooleanFieldPreview.vue'),
  'CollectionsContentRecord': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/CollectionsContentRecord.vue'),
  'CollectionsSimpleRecord': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/CollectionsSimpleRecord.vue'),
  'CollectionTranslations': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/CollectionTranslations.vue'),
  'DateFormatField': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/DateFormatField.vue'),
  'DateTimeFormatField': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/DateTimeFormatField.vue'),
  'Dialog': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/Dialog.vue'),
  'DragImage': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/DragImage.vue'),
  'FieldLayout': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/FieldLayout.vue'),
  'FieldLayoutTabs': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/FieldLayoutTabs.vue'),
  'FilterPopup': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/FilterPopup.vue'),
  'FilterRule': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/FilterRule.vue'),
  'Globals': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/Globals.vue'),
  'HistoryButtons': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/HistoryButtons.vue'),
  'ImagePreview': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/ImagePreview.vue'),
  'InputError': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/InputError.vue'),
  'LegalLinks': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/LegalLinks.vue'),
  'LoadingIndicator': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/LoadingIndicator.vue'),
  'Logo': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/Logo.vue'),
  'LogoFull': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/LogoFull.vue'),
  'MediaBreadcrumbs': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaBreadcrumbs.vue'),
  'MediaDirectoryPopup': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaDirectoryPopup.vue'),
  'MediaFileInput': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaFileInput.vue'),
  'MediaItemDirectory': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaItemDirectory.vue'),
  'MediaItemUpload': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaItemUpload.vue'),
  'MediaLibrary': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaLibrary.vue'),
  'MediaLibraryPopup': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaLibraryPopup.vue'),
  'MediaMovePopup': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaMovePopup.vue'),
  'MediaMovePopupItem': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaMovePopupItem.vue'),
  'MediaUploadPopup': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaUploadPopup.vue'),
  'MoreBlockOptionsPopup': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MoreBlockOptionsPopup.vue'),
  'MultiCollectionsOverview': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/MultiCollectionsOverview.vue'),
  'Popup': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/Popup.vue'),
  'QuickActions': () => import('../../../packages/data/components/DashboardSyncMicrosoftCollections.vue'),
  'SearchMedia': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/SearchMedia.vue'),
  'SearchRecords': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/SearchRecords.vue'),
  'SingleCollectionsOverview': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/SingleCollectionsOverview.vue'),
  'StringFieldPreview': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/StringFieldPreview.vue'),
  'TableColumnsPopup': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/TableColumnsPopup.vue'),
  'TablePagination': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/TablePagination.vue'),
  'TableSorter': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/TableSorter.vue'),
  'Toaster': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/Toaster.vue'),
  'TranslationsFieldPreview': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/TranslationsFieldPreview.vue'),
  'UnsavedChanges': () => import('../../../node_modules/pruvious/dist/runtime/components/misc/UnsavedChanges.vue'),
}

export const dashboardMiscComponent = {
  'AddBlockPopup': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/AddBlockPopup.vue')),
  'Base': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/Base.vue')),
  'BlockTreeItem': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/BlockTreeItem.vue')),
  'BooleanFieldPreview': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/BooleanFieldPreview.vue')),
  'CollectionsContentRecord': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/CollectionsContentRecord.vue')),
  'CollectionsSimpleRecord': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/CollectionsSimpleRecord.vue')),
  'CollectionTranslations': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/CollectionTranslations.vue')),
  'DateFormatField': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/DateFormatField.vue')),
  'DateTimeFormatField': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/DateTimeFormatField.vue')),
  'Dialog': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/Dialog.vue')),
  'DragImage': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/DragImage.vue')),
  'FieldLayout': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/FieldLayout.vue')),
  'FieldLayoutTabs': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/FieldLayoutTabs.vue')),
  'FilterPopup': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/FilterPopup.vue')),
  'FilterRule': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/FilterRule.vue')),
  'Globals': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/Globals.vue')),
  'HistoryButtons': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/HistoryButtons.vue')),
  'ImagePreview': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/ImagePreview.vue')),
  'InputError': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/InputError.vue')),
  'LegalLinks': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/LegalLinks.vue')),
  'LoadingIndicator': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/LoadingIndicator.vue')),
  'Logo': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/Logo.vue')),
  'LogoFull': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/LogoFull.vue')),
  'MediaBreadcrumbs': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaBreadcrumbs.vue')),
  'MediaDirectoryPopup': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaDirectoryPopup.vue')),
  'MediaFileInput': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaFileInput.vue')),
  'MediaItemDirectory': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaItemDirectory.vue')),
  'MediaItemUpload': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaItemUpload.vue')),
  'MediaLibrary': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaLibrary.vue')),
  'MediaLibraryPopup': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaLibraryPopup.vue')),
  'MediaMovePopup': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaMovePopup.vue')),
  'MediaMovePopupItem': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaMovePopupItem.vue')),
  'MediaUploadPopup': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MediaUploadPopup.vue')),
  'MoreBlockOptionsPopup': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MoreBlockOptionsPopup.vue')),
  'MultiCollectionsOverview': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/MultiCollectionsOverview.vue')),
  'Popup': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/Popup.vue')),
  'QuickActions': () => defineAsyncComponent(() => import('../../../packages/data/components/DashboardSyncMicrosoftCollections.vue')),
  'SearchMedia': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/SearchMedia.vue')),
  'SearchRecords': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/SearchRecords.vue')),
  'SingleCollectionsOverview': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/SingleCollectionsOverview.vue')),
  'StringFieldPreview': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/StringFieldPreview.vue')),
  'TableColumnsPopup': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/TableColumnsPopup.vue')),
  'TablePagination': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/TablePagination.vue')),
  'TableSorter': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/TableSorter.vue')),
  'Toaster': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/Toaster.vue')),
  'TranslationsFieldPreview': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/TranslationsFieldPreview.vue')),
  'UnsavedChanges': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/UnsavedChanges.vue')),
}

export const blockFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/BlockField.vue'))
export const blockFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/BlockFieldPreview.vue'))

export const buttonGroupFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/ButtonGroupField.vue'))
export const buttonGroupFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/ButtonGroupFieldPreview.vue'))

export const checkboxFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/CheckboxField.vue'))
export const checkboxFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/CheckboxFieldPreview.vue'))

export const checkboxesFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/CheckboxesField.vue'))
export const checkboxesFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/CheckboxesFieldPreview.vue'))

export const chipsFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/ChipsField.vue'))
export const chipsFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/ChipsFieldPreview.vue'))

export const dateRangeFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/DateRangeField.vue'))
export const dateRangeFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/DateRangeFieldPreview.vue'))

export const dateTimeRangeFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/DateTimeRangeField.vue'))
export const dateTimeRangeFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/DateTimeRangeFieldPreview.vue'))

export const dateTimeFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/DateTimeField.vue'))
export const dateTimeFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/DateTimeFieldPreview.vue'))

export const dateFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/DateField.vue'))
export const dateFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/DateFieldPreview.vue'))

export const editorFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/EditorField.vue'))
export const editorFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/EditorFieldPreview.vue'))

export const fileFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/FileField.vue'))
export const fileFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/FileFieldPreview.vue'))

export const iconFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/IconField.vue'))
export const iconFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/IconFieldPreview.vue'))

export const imageFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/ImageField.vue'))
export const imageFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/ImageFieldPreview.vue'))

export const linkFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/LinkField.vue'))
export const linkFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/LinkFieldPreview.vue'))

export const numberFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/NumberField.vue'))
export const numberFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/NumberFieldPreview.vue'))

export const rangeFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/RangeField.vue'))
export const rangeFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/RangeFieldPreview.vue'))

export const recordFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/RecordField.vue'))
export const recordFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/RecordFieldPreview.vue'))

export const recordsFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/RecordsField.vue'))
export const recordsFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/RecordsFieldPreview.vue'))

export const repeaterFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/RepeaterField.vue'))
export const repeaterFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/RepeaterFieldPreview.vue'))

export const selectFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/SelectField.vue'))
export const selectFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/SelectFieldPreview.vue'))

export const sizeFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/SizeField.vue'))
export const sizeFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/SizeFieldPreview.vue'))

export const sliderRangeFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/SliderRangeField.vue'))
export const sliderRangeFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/SliderRangeFieldPreview.vue'))

export const sliderFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/SliderField.vue'))
export const sliderFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/SliderFieldPreview.vue'))

export const switchFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/SwitchField.vue'))
export const switchFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/SwitchFieldPreview.vue'))

export const textAreaFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/TextAreaField.vue'))
export const textAreaFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/TextAreaFieldPreview.vue'))

export const textFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/TextField.vue'))
export const textFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/TextFieldPreview.vue'))

export const timeRangeFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/TimeRangeField.vue'))
export const timeRangeFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/TimeRangeFieldPreview.vue'))

export const timeFieldComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/fields/TimeField.vue'))
export const timeFieldPreviewComponent = () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/field-previews/TimeFieldPreview.vue'))

export const fields = {
  'block': blockFieldComponent,
  'button-group': buttonGroupFieldComponent,
  'checkbox': checkboxFieldComponent,
  'checkboxes': checkboxesFieldComponent,
  'chips': chipsFieldComponent,
  'date-range': dateRangeFieldComponent,
  'date-time-range': dateTimeRangeFieldComponent,
  'date-time': dateTimeFieldComponent,
  'date': dateFieldComponent,
  'editor': editorFieldComponent,
  'file': fileFieldComponent,
  'icon': iconFieldComponent,
  'image': imageFieldComponent,
  'link': linkFieldComponent,
  'number': numberFieldComponent,
  'range': rangeFieldComponent,
  'record': recordFieldComponent,
  'records': recordsFieldComponent,
  'repeater': repeaterFieldComponent,
  'select': selectFieldComponent,
  'size': sizeFieldComponent,
  'slider-range': sliderRangeFieldComponent,
  'slider': sliderFieldComponent,
  'switch': switchFieldComponent,
  'text-area': textAreaFieldComponent,
  'text': textFieldComponent,
  'time-range': timeRangeFieldComponent,
  'time': timeFieldComponent,
}

export const fieldPreviews = {
  'block': blockFieldPreviewComponent,
  'button-group': buttonGroupFieldPreviewComponent,
  'checkbox': checkboxFieldPreviewComponent,
  'checkboxes': checkboxesFieldPreviewComponent,
  'chips': chipsFieldPreviewComponent,
  'date-range': dateRangeFieldPreviewComponent,
  'date-time-range': dateTimeRangeFieldPreviewComponent,
  'date-time': dateTimeFieldPreviewComponent,
  'date': dateFieldPreviewComponent,
  'editor': editorFieldPreviewComponent,
  'file': fileFieldPreviewComponent,
  'icon': iconFieldPreviewComponent,
  'image': imageFieldPreviewComponent,
  'link': linkFieldPreviewComponent,
  'number': numberFieldPreviewComponent,
  'range': rangeFieldPreviewComponent,
  'record': recordFieldPreviewComponent,
  'records': recordsFieldPreviewComponent,
  'repeater': repeaterFieldPreviewComponent,
  'select': selectFieldPreviewComponent,
  'size': sizeFieldPreviewComponent,
  'slider-range': sliderRangeFieldPreviewComponent,
  'slider': sliderFieldPreviewComponent,
  'switch': switchFieldPreviewComponent,
  'text-area': textAreaFieldPreviewComponent,
  'text': textFieldPreviewComponent,
  'time-range': timeRangeFieldPreviewComponent,
  'time': timeFieldPreviewComponent,
}

export const fieldTypes = {
  'block': 'object',
  'button-group': 'string',
  'checkbox': 'boolean',
  'checkboxes': 'object',
  'chips': 'object',
  'date-range': 'object',
  'date-time-range': 'object',
  'date-time': 'number',
  'date': 'number',
  'editor': 'string',
  'file': 'number',
  'icon': 'string',
  'image': 'object',
  'link': 'string',
  'number': 'number',
  'range': 'object',
  'record': 'number',
  'records': 'object',
  'repeater': 'object',
  'select': 'string',
  'size': 'object',
  'slider-range': 'object',
  'slider': 'number',
  'switch': 'boolean',
  'text-area': 'string',
  'text': 'string',
  'time-range': 'object',
  'time': 'number',
}

export const defaultFieldValues = {
  'block': null,
  'button-group': null,
  'checkbox': false,
  'checkboxes': [],
  'chips': [],
  'date-range': [null,null],
  'date-time-range': [null,null],
  'date-time': null,
  'date': null,
  'editor': '',
  'file': null,
  'icon': null,
  'image': null,
  'link': '',
  'number': 0,
  'range': [0,100],
  'record': null,
  'records': [],
  'repeater': [],
  'select': null,
  'size': "",
  'slider-range': [0,100],
  'slider': 0,
  'switch': false,
  'text-area': '',
  'text': '',
  'time-range': [null,null],
  'time': null,
}

export const tableAdditionalCollectionOptions = {
  'pages': null,
  'presets': null,
  'previews': null,
  'redirects': null,
  'roles': null,
  'seo': null,
  'uploads': null,
  'users': null,
  'episodes': null,
  'events': null,
  'posts': null,
  'taxonomies': null,
}

export const recordAdditionalCollectionOptions = {
  'pages': null,
  'presets': null,
  'previews': null,
  'redirects': null,
  'roles': null,
  'seo': null,
  'uploads': null,
  'users': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/LogoutUserFromAllSessions.vue')),
  'episodes': null,
  'events': null,
  'posts': null,
  'taxonomies': null,
}

export const customFieldLayoutComponents = {
  '<~runtime/components/misc/RecordUrlField.vue>': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/RecordUrlField.vue')),
  '<~runtime/components/misc/RedirectsTest.vue>': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/RedirectsTest.vue')),
  '<~runtime/components/misc/UserPasswordField.vue>': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/UserPasswordField.vue')),
  '<~runtime/components/misc/DateFormatField.vue>': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/DateFormatField.vue')),
  '<~runtime/components/misc/TimeFormatField.vue>': () => defineAsyncComponent(() => import('../../../node_modules/pruvious/dist/runtime/components/misc/TimeFormatField.vue')),
}

export const dashboardPageComponentImports = {}
