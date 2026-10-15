// CoinTrack sponsors
// ------------------------------------------------------------------
// One list, used in two places:
//   • index.html    – the banner above the coin grid shows the sponsor
//                      marked `featured: true` (or the first one).
//   • sponsors.html – every sponsor gets a full spotlight card.
//
// Leave the list empty and the banner becomes a "Your brand here" ad
// that links to the Become a sponsor section of sponsors.html.
//
// Fields (only `name` is required):
//   id          short slug, used for links like sponsors.html#heritage-mint
//   name        sponsor name
//   tagline     one line shown in the banner and under the name
//   url         sponsor website (tip: add UTM tags so they can measure visits)
//   cta         button text, e.g. 'Shop now'
//   logo        image URL (PNG / SVG / JPG). Shown in full, never cropped.
//   logoBg      background behind the logo: white suits dark logos,
//               a dark color like '#0f172a' suits white logos
//   about       a paragraph or two for the sponsors page
//   highlights  short bullet points for the sponsors page
//   offer       { code: 'COINTRACK10', details: '10% off your first order' }
//   location    e.g. 'Dallas, TX' or 'Ships nationwide'
//   since       when they started sponsoring, e.g. 'October 2026'
//   featured    true = this one appears in the banner
//
// Example (copy it into the list below and fill it in):
//
//   {
//       id: 'heritage-mint',
//       name: 'Heritage Mint',
//       tagline: 'Certified bullion and graded rarities, shipped insured.',
//       url: 'https://example.com/?utm_source=cointrack&utm_medium=sponsor',
//       cta: 'Shop now',
//       logo: 'https://example.com/logo.png',
//       logoBg: '#ffffff',
//       about: 'Family-run dealer specialising in PCGS and NGC graded US coins.',
//       highlights: ['PCGS & NGC graded inventory', 'Free insured shipping over $99'],
//       offer: { code: 'COINTRACK10', details: '10% off your first order' },
//       location: 'Ships nationwide',
//       since: 'October 2026',
//       featured: true
//   },

window.COINTRACK_SPONSORS = [
];

window.COINTRACK_SPONSOR_CONTACT = 'support@cointrack.io';
