import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        __typename
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Grants
export const GET_GRANTS = gql`
  query GetGrants($first: Int = 20) {
    nodeGrants(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeGrant {
          body {
            processed
            summary
          }
          grantType {
            ... on TermInterface {
              id
              name
            }
          }
          fundingAmount
          deadline {
            timestamp
          }
          eligibilityCriteria {
            processed
          }
          focusAreas {
            ... on TermInterface {
              id
              name
            }
          }
          applicationUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_GRANT_BY_PATH = gql`
  query GetGrantByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeGrant {
            __typename
            id
            title
            path
            body {
              processed
            }
            grantType {
              ... on TermInterface {
                id
                name
              }
            }
            fundingAmount
            deadline {
              timestamp
            }
            eligibilityCriteria {
              processed
            }
            focusAreas {
              ... on TermInterface {
                id
                name
              }
            }
            applicationUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Focus Areas
export const GET_FOCUS_AREAS = gql`
  query GetFocusAreas($first: Int = 20) {
    nodeFocusAreas(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeFocusArea {
          body {
            processed
            summary
          }
          iconName
          investmentTotal
          grantsAwarded
          keyOutcomes
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_FOCUS_AREA_BY_PATH = gql`
  query GetFocusAreaByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeFocusArea {
            __typename
            id
            title
            path
            body {
              processed
            }
            iconName
            investmentTotal
            grantsAwarded
            keyOutcomes
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          eventCategory {
            ... on TermInterface {
              id
              name
            }
          }
          registrationUrl
          ticketPrice
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            __typename
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventCategory {
              ... on TermInterface {
                id
                name
              }
            }
            registrationUrl
            ticketPrice
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            processed
            summary
          }
          newsCategory {
            ... on TermInterface {
              id
              name
            }
          }
          publishDate {
            timestamp
          }
          author
          summary {
            processed
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            __typename
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            newsCategory {
              ... on TermInterface {
                id
                name
              }
            }
            publishDate {
              timestamp
            }
            author
            summary {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for all content types
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            path
            body {
              processed
            }
          }
          ... on NodeGrant {
            __typename
            id
            title
            path
            body {
              processed
            }
            grantType {
              ... on TermInterface {
                id
                name
              }
            }
            fundingAmount
            deadline {
              timestamp
            }
            eligibilityCriteria {
              processed
            }
            focusAreas {
              ... on TermInterface {
                id
                name
              }
            }
            applicationUrl
            image {
              url
              alt
            }
          }
          ... on NodeFocusArea {
            __typename
            id
            title
            path
            body {
              processed
            }
            iconName
            investmentTotal
            grantsAwarded
            keyOutcomes
            image {
              url
              alt
            }
          }
          ... on NodeEvent {
            __typename
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventCategory {
              ... on TermInterface {
                id
                name
              }
            }
            registrationUrl
            ticketPrice
            image {
              url
              alt
            }
          }
          ... on NodeNews {
            __typename
            id
            title
            path
            body {
              processed
            }
            newsCategory {
              ... on TermInterface {
                id
                name
              }
            }
            publishDate {
              timestamp
            }
            author
            summary {
              processed
            }
            image {
              url
              alt
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            path
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured grants for homepage
export const GET_FEATURED_GRANTS = gql`
  query GetFeaturedGrants {
    nodeGrants(first: 3, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeGrant {
          fundingAmount
          deadline {
            timestamp
          }
          focusAreas {
            ... on TermInterface {
              id
              name
            }
          }
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured news for homepage
export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          summary {
            processed
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          newsCategory {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          location
          eventCategory {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`
