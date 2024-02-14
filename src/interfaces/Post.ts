export interface LayoutSections {
}

export interface Post {
  archivedAt: number
  archivedInDashboard: boolean
  attachedStylesheets: any[]
  authorName: string
  blogAuthorId: string
  categoryId: number
  contentGroupId: string
  contentTypeCategory: number
  created: Date
  createdById: string
  currentState: string
  currentlyPublished: boolean
  domain: string
  enableGoogleAmpOutputOverride: boolean
  featuredImage: string
  featuredImageAltText: string
  htmlTitle: string
  id: string
  language: string
  layoutSections: LayoutSections
  metaDescription: string
  name: string
  postBody: string
  postSummary: string
  publicAccessRules: any[]
  publicAccessRulesEnabled: boolean
  publishDate: Date
  publishImmediately: boolean
  rssBody: string
  rssSummary: string
  slug: string
  state: string
  tagIds: any[]
  translations: LayoutSections
  updated: Date
  updatedById: string
  url: string
  useFeaturedImage: boolean
  widgetContainers: LayoutSections
  widgets: LayoutSections
}
