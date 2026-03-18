/**
 * Shared HomeAndConstructionBusiness schema for Triangle Dehumidifiers.
 *
 * Centralizes the business identity fields that are identical on every page
 * so they can be maintained in one place. Each page calls `buildBusinessSchema()`
 * with optional overrides for page-specific fields like `areaServed` or `description`.
 *
 * Schema.org fixes applied:
 *  - Removed `serviceType` (not a valid property on HomeAndConstructionBusiness)
 *  - Replaced `openingHours` string with `openingHoursSpecification` objects
 *  - Ensured `areaServed` always uses structured City objects
 */

interface AreaServed {
  '@type': 'City';
  name: string;
  containedInPlace?: { '@type': 'State'; name: string };
}

interface BusinessSchemaOverrides {
  areaServed?: AreaServed | AreaServed[];
  description?: string;
  email?: string;
}

const BASE_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://www.triangledehumidifiers.com/#business',
  name: 'Triangle Dehumidifiers, LLC',
  telephone: '(919) 867-0580',
  url: 'https://www.triangledehumidifiers.com',
  image: 'https://www.triangledehumidifiers.com/images/hero-livingroom.webp',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.triangledehumidifiers.com/logo.webp',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Holly Springs',
    addressRegion: 'NC',
    postalCode: '27540',
    addressCountry: 'US',
  },
  hasMap: 'https://maps.app.goo.gl/5ZNkdiqdTqKvNqTH9',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '19',
  },
  sameAs: [
    'https://www.google.com/maps/place/Triangle+Dehumidifiers,+LLC/',
    'https://maps.app.goo.gl/5ZNkdiqdTqKvNqTH9',
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
} as const;

/** All cities served — used on homepage, contact, and service-areas pages. */
export const ALL_AREAS_SERVED: AreaServed[] = [
  { '@type': 'City', name: 'Raleigh' },
  { '@type': 'City', name: 'Cary' },
  { '@type': 'City', name: 'Apex' },
  { '@type': 'City', name: 'Holly Springs' },
  { '@type': 'City', name: 'Fuquay-Varina' },
  { '@type': 'City', name: 'Morrisville' },
  { '@type': 'City', name: 'Garner' },
  { '@type': 'City', name: 'Wake Forest' },
  { '@type': 'City', name: 'Knightdale' },
  { '@type': 'City', name: 'Durham' },
  { '@type': 'City', name: 'Chapel Hill' },
];

/** Extended list including Pittsboro and Clayton (used on service-areas page). */
export const EXTENDED_AREAS_SERVED: AreaServed[] = [
  ...ALL_AREAS_SERVED,
  { '@type': 'City', name: 'Pittsboro' },
  { '@type': 'City', name: 'Clayton' },
];

/**
 * Helper to build a structured City areaServed for a single-city page.
 * Includes `containedInPlace` for proper schema nesting.
 */
export function cityArea(name: string): AreaServed {
  return {
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'State', name: 'North Carolina' },
  };
}

/**
 * Builds the HomeAndConstructionBusiness JSON-LD schema.
 *
 * @param overrides - Page-specific fields that differ from the base schema.
 *   `areaServed` — single city for city pages, array for broad pages.
 *   `description` — optional page-level business description.
 *   `email` — included on homepage and contact page only.
 */
export function buildBusinessSchema(overrides: BusinessSchemaOverrides = {}) {
  return {
    ...BASE_BUSINESS_SCHEMA,
    ...overrides,
  };
}
