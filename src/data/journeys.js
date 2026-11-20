// Source: "NorLha Website Detailed Itinery.docx" (working draft) and
// "NorLha_Website_Content and Concept.docx" (Page 4 – Bhutan Journeys).

export const accommodation = [
  { tier: 'Standard', text: 'Comfortable 3–4-star hotels and well-appointed local properties.' },
  { tier: 'Premium', text: 'Selected higher-end 4-star and boutique properties.' },
  { tier: 'Luxury', text: '5-star hotels, luxury resorts and exclusive retreats, subject to availability.' },
  { tier: 'Bespoke', text: 'A personally selected mix of properties, room categories and special arrangements.' },
];

export const journeys = [
  {
    slug: 'bhutan-in-brief',
    no: '01',
    title: 'Bhutan in Brief',
    days: 3,
    nights: 2,
    route: ['Paro'],
    photo: 'paro-valley',
    tone: 'dawn',
    summary:
      'A short yet meaningful introduction to Bhutan, discovering the heritage, landscapes and peaceful charm of the Paro Valley.',
    intro:
      'A short introduction to Bhutan for travelers with very limited time. This journey focuses on Paro Valley, its cultural heritage and the iconic Tiger’s Nest Monastery.',
    highlights: ['Tiger’s Nest Monastery (Taktsang)', 'Rinpung Dzong', 'Ta Dzong — National Museum', 'Kyichu Lhakhang'],
    overnight: [{ place: 'Paro', nights: 2 }],
    itinerary: [
      {
        title: 'Arrive in Paro',
        items: [
          'Arrive at Paro International Airport and meet your guide.',
          'Transfer to your hotel and enjoy a relaxed introduction to the valley.',
          'If arrival time permits, visit Rinpung Dzong and Ta Dzong (National Museum).',
        ],
      },
      {
        title: 'Tiger’s Nest Monastery',
        items: [
          'After breakfast, drive to the trailhead and hike to Taktsang Monastery, famously known as Tiger’s Nest.',
          'Allow approximately 5–6 hours for the round-trip hike, depending on pace and stops.',
          'Return to Paro for a relaxed evening. A traditional hot stone bath or spa treatment can be arranged.',
        ],
      },
      {
        title: 'Departure',
        items: [
          'Depending on flight time, visit Kyichu Lhakhang or enjoy a short walk around Paro town.',
          'Transfer to the airport for departure.',
        ],
      },
    ],
    optional: [
      'For guests who prefer not to hike, an alternative Paro Valley cultural experience.',
      'Traditional hot stone bath, spa treatment or a private farmhouse meal.',
    ],
  },
  {
    slug: 'a-taste-of-bhutan',
    no: '02',
    title: 'A Taste of Bhutan',
    days: 4,
    nights: 3,
    route: ['Paro', 'Thimphu'],
    photo: 'thimphu',
    tone: 'dzong',
    summary:
      'Experience the contrast between Paro’s traditional valley life and Thimphu’s distinctive blend of heritage, culture and contemporary Bhutanese life.',
    intro:
      'A compact introduction combining Paro’s heritage with a first experience of Bhutan’s capital, Thimphu.',
    highlights: ['Tiger’s Nest Monastery', 'Buddha Dordenma', 'Tashichho Dzong', 'Memorial Chorten', 'Simtokha Dzong'],
    overnight: [
      { place: 'Paro', nights: 2 },
      { place: 'Thimphu', nights: 1 },
    ],
    itinerary: [
      {
        title: 'Arrive in Paro',
        items: [
          'Arrive in Bhutan and meet your guide.',
          'Explore Paro town and, subject to arrival time, visit Rinpung Dzong and Ta Dzong.',
        ],
      },
      {
        title: 'Tiger’s Nest Monastery',
        items: [
          'Hike to Taktsang Monastery, allowing approximately 5–6 hours for the round trip.',
          'Return to Paro and enjoy a relaxed evening.',
        ],
      },
      {
        title: 'Paro to Thimphu',
        items: [
          'Drive to Thimphu, with a stop at Simtokha Dzong if time allows.',
          'Discover Buddha Dordenma, the Memorial Chorten and Tashichho Dzong, subject to opening hours.',
          'Enjoy time in the town for local crafts and everyday Bhutanese life.',
        ],
      },
      {
        title: 'Departure',
        items: [
          'Transfer from Thimphu to Paro International Airport.',
          'If flight timing permits, include a short visit to Kyichu Lhakhang.',
        ],
      },
    ],
    optional: [
      'Simply Bhutan cultural experience.',
      'Private farmhouse dinner, traditional hot stone bath or textile and handicraft experience.',
    ],
  },
  {
    slug: 'bhutan-highlights',
    no: '03',
    title: 'Bhutan Highlights',
    days: 5,
    nights: 4,
    route: ['Paro', 'Thimphu', 'Punakha'],
    photo: 'punakha-dzong',
    tone: 'valley',
    summary:
      'Discover three of western Bhutan’s most celebrated destinations, from ancient monasteries and vibrant towns to the beautiful valleys of Punakha.',
    intro:
      'A concise western Bhutan journey covering the country’s principal cultural centres and the beautiful Punakha Valley.',
    highlights: ['Dochula Pass', 'Punakha Dzong', 'Chimi Lhakhang', 'Punakha Suspension Bridge', 'Tiger’s Nest Monastery'],
    overnight: [
      { place: 'Thimphu', nights: 1 },
      { place: 'Punakha', nights: 1 },
      { place: 'Paro', nights: 2 },
    ],
    itinerary: [
      {
        title: 'Arrive in Paro and drive to Thimphu',
        items: [
          'Arrive at Paro International Airport and drive to Thimphu.',
          'Depending on arrival time, visit Buddha Dordenma and the Memorial Chorten.',
        ],
      },
      {
        title: 'Thimphu to Punakha',
        items: [
          'Travel across Dochula Pass, enjoying views of the Himalayan range when weather permits.',
          'Continue to Punakha and visit Chimi Lhakhang.',
          'Explore Punakha Dzong, subject to access and opening arrangements.',
        ],
      },
      {
        title: 'Punakha to Paro',
        items: [
          'Visit Punakha Suspension Bridge and, if time and conditions permit, hike to Khamsum Yulley Namgyal Chorten.',
          'Drive back to Paro. This is a substantial transfer day, with stops planned along the way.',
        ],
      },
      {
        title: 'Tiger’s Nest Monastery',
        items: [
          'Hike to Taktsang Monastery, allowing approximately 5–6 hours for the round trip.',
          'Return to Paro for a relaxed evening.',
        ],
      },
      {
        title: 'Departure',
        items: [
          'If flight timing permits, visit Kyichu Lhakhang or enjoy a short walk in Paro.',
          'Transfer to the airport.',
        ],
      },
    ],
    optional: [
      'White-water rafting in Punakha, subject to season and river conditions.',
      'Farmhouse meal, hot stone bath, or a local craft experience.',
    ],
  },
  {
    slug: 'the-essence-of-bhutan',
    no: '04',
    title: 'The Essence of Bhutan',
    days: 7,
    nights: 6,
    route: ['Paro', 'Thimphu', 'Punakha'],
    photo: 'dochula',
    tone: 'forest',
    summary:
      'A refined introduction to Bhutan’s cultural heritage, beautiful landscapes and distinctive way of life, with time to experience each destination at a comfortable pace.',
    intro:
      'A more relaxed introduction to Bhutan, with additional time in Thimphu and Punakha and a dedicated day for the Tiger’s Nest hike.',
    highlights: ['Folk Heritage Museum', 'Institute for Zorig Chusum', 'Takin Preserve', 'Punakha Dzong', 'Khamsum Yulley Namgyal Chorten', 'Tiger’s Nest Monastery'],
    overnight: [
      { place: 'Thimphu', nights: 2 },
      { place: 'Punakha', nights: 2 },
      { place: 'Paro', nights: 2 },
    ],
    itinerary: [
      {
        title: 'Arrive in Paro and drive to Thimphu',
        items: [
          'Meet your guide at Paro International Airport and drive to Thimphu.',
          'If time permits, stop at Simtokha Dzong or enjoy a gentle introduction to the capital.',
        ],
      },
      {
        title: 'Discover Thimphu',
        items: [
          'Visit Buddha Dordenma and the Memorial Chorten.',
          'Explore the Folk Heritage Museum and the Institute for Zorig Chusum, subject to opening days.',
          'Visit the Takin Preserve and browse local handicraft shops, as time allows.',
        ],
      },
      {
        title: 'Thimphu to Punakha',
        items: ['Drive over Dochula Pass and visit the hilltop chortens.', 'Continue to Punakha, with a stop at Chimi Lhakhang.'],
      },
      {
        title: 'Explore Punakha',
        items: [
          'Visit Punakha Dzong and the Suspension Bridge.',
          'Walk to Khamsum Yulley Namgyal Chorten for valley views, if suitable for the group.',
          'Enjoy time at a riverside setting or arrange a farmhouse experience.',
        ],
      },
      {
        title: 'Punakha to Paro',
        items: [
          'Return to Paro via Dochula Pass and Thimphu.',
          'Keep the day flexible for scenic stops and rest; visit Paro town or Rinpung Dzong if arrival time allows.',
        ],
      },
      {
        title: 'Tiger’s Nest Monastery',
        items: [
          'Spend the day hiking to Taktsang Monastery.',
          'Allow approximately 5–6 hours for the round trip, with time for breaks and photographs.',
        ],
      },
      {
        title: 'Departure',
        items: [
          'If flight timing permits, visit Kyichu Lhakhang or enjoy a relaxed breakfast.',
          'Transfer to Paro International Airport.',
        ],
      },
    ],
    optional: [
      'Private farmhouse dinner or a traditional cooking experience.',
      'Hot stone bath, archery, local craft workshop or a gentle village walk.',
    ],
  },
  {
    slug: 'the-norlha-signature',
    no: '05',
    title: 'The NorLha Signature',
    days: 10,
    nights: 9,
    route: ['Paro', 'Thimphu', 'Punakha', 'Phobjikha', 'Paro'],
    photo: 'phobjikha',
    tone: 'dusk',
    signature: true,
    summary:
      'A carefully paced journey through western Bhutan, combining cultural discovery, dramatic landscapes, peaceful valleys and meaningful local experiences.',
    intro:
      'NorLha’s signature western Bhutan journey, designed for travelers who want to experience the country at a measured pace, including two nights in the tranquil Phobjikha Valley.',
    highlights: ['Gangtey Goenpa', 'Gangtey Nature Trail', 'Black-Necked Crane Information Centre', 'Punakha Dzong', 'Drukgyel Dzong', 'Tiger’s Nest Monastery'],
    overnight: [
      { place: 'Thimphu', nights: 2 },
      { place: 'Punakha', nights: 2 },
      { place: 'Phobjikha', nights: 2 },
      { place: 'Paro', nights: 3 },
    ],
    itinerary: [
      {
        title: 'Arrive in Paro and drive to Thimphu',
        items: ['Arrive in Bhutan and meet your guide.', 'Drive to Thimphu and settle into your hotel.', 'Enjoy a welcome dinner and a relaxed evening.'],
      },
      {
        title: 'Discover Thimphu',
        items: [
          'Visit Buddha Dordenma and the Memorial Chorten.',
          'Explore the Folk Heritage Museum and the Institute for Zorig Chusum, subject to opening days.',
          'Discover local handicrafts and the character of the capital.',
        ],
      },
      {
        title: 'Thimphu to Punakha',
        items: ['Travel over Dochula Pass, with time to enjoy the mountain scenery.', 'Visit Chimi Lhakhang en route to Punakha.'],
      },
      {
        title: 'Explore Punakha',
        items: [
          'Visit Punakha Dzong and the Suspension Bridge.',
          'Walk to Khamsum Yulley Namgyal Chorten, if suitable.',
          'Enjoy a private farmhouse meal or time in the valley.',
        ],
      },
      {
        title: 'Punakha to Phobjikha',
        items: [
          'Drive via Wangdue Phodrang toward the Gangtey and Phobjikha Valley.',
          'Make scenic stops along the way and check in to your valley accommodation.',
        ],
      },
      {
        title: 'Discover Phobjikha',
        items: [
          'Visit Gangtey Goenpa and walk part of the Gangtey Nature Trail.',
          'Visit the Black-Necked Crane Information Centre, subject to opening hours.',
          'Enjoy a village visit or a home-hosted meal where arrangements are available.',
        ],
      },
      {
        title: 'Phobjikha to Paro',
        items: [
          'Travel back toward Paro via Wangdue, Punakha and Thimphu.',
          'This is a long transfer day; keep stops selective and the evening free for rest.',
        ],
      },
      {
        title: 'Paro’s cultural heritage',
        items: [
          'Visit Ta Dzong (National Museum), Rinpung Dzong, Kyichu Lhakhang and Drukgyel Dzong, arranging the order according to time and opening hours.',
        ],
      },
      {
        title: 'Tiger’s Nest Monastery',
        items: ['Hike to Taktsang Monastery, allowing approximately 5–6 hours for the round trip.', 'Enjoy a farewell dinner in the evening.'],
      },
      { title: 'Departure', items: ['Transfer to Paro International Airport for departure.'] },
    ],
    optional: [
      'Seasonal black-necked crane observation in Phobjikha; sightings are not guaranteed.',
      'Premium or luxury lodge stay in Phobjikha, subject to availability.',
      'Farmhouse meal, river rafting in Punakha, hot stone bath, wellness treatment or private craft experience.',
    ],
  },
];
