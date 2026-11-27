// "Explore Bhutan Your Way" travel styles. Source: Content & Concept doc, Page 4 + "Details" pages.
// Romance and Cultural have their own detail copy in the docs. Luxury, Himalayan Adventures, Family
// and Wellness are assembled from lines elsewhere in the documents (Pages 1–3 and the optional
// experiences in the Itinerary doc) — replace them when dedicated copy is written.

export const styles = [
  {
    slug: 'luxury-bhutan',
    title: 'Luxury Bhutan',
    tags: 'Private · Tailor-made',
    photo: 'luxury',
    tone: 'dusk',
    short: 'Comfort, privacy and exceptional experiences, thoughtfully combined.',
    summary:
      'Comfort, privacy and exceptional experiences thoughtfully combined around your preferences, with carefully selected accommodation and personalised arrangements.',
    eyebrow: 'Private · Tailor-made · Thoughtfully refined',
    headline: 'Luxury is personal.',
    lead: [
      'Luxury is personal.',
      'For some, it is an exceptional hotel surrounded by mountains. For others, it is a private experience, a beautiful meal, or simply having time with nowhere else to be.',
      'We focus on the details that make a journey feel comfortable, effortless and special.',
    ],
    sections: [
      {
        heading: 'Comfort without compromising character',
        paras: [
          'From intimate boutique properties to distinguished luxury hotels and retreats, we can arrange accommodation according to your preferences, itinerary and availability. The same applies to transportation and guiding.',
          'Your journey should have the right balance of comfort, privacy, authenticity and flexibility.',
        ],
      },
      {
        heading: 'Thoughtfully selected',
        paras: ['Where you stay and how you travel are part of the experience. Depending on your preferences, your journey can include:'],
        list: [
          '5-star hotels, luxury resorts and exclusive retreats, subject to availability',
          'A personally selected mix of properties and room categories',
          'Premium or luxury lodge stays, such as in the Phobjikha Valley',
          'Private transportation and personal guiding',
          'Spa, wellness treatments and a traditional hot stone bath',
          'Private farmhouse dinners and special arrangements',
        ],
      },
      {
        heading: 'Seamlessly arranged',
        paras: [
          'The best journeys feel effortless.',
          'We coordinate the details behind the scenes — from arrival and transportation to accommodation, guides, experiences, and the practical elements of your journey — so you can concentrate on being present.',
        ],
      },
    ],
    cta: 'Plan your luxury journey',
  },
  {
    slug: 'cultural-bhutan',
    title: 'Cultural Bhutan',
    tags: 'Private · Immersive',
    photo: 'culture',
    tone: 'dzong',
    short: 'Discover Bhutan’s history, spirituality, architecture, traditions and people.',
    summary:
      'Discover Bhutan through its monasteries, dzongs, villages, architecture, crafts, cuisine, spirituality and stories.',
    eyebrow: 'Culture · Heritage · Spirituality · Private travel',
    headline: 'Go beyond the landmarks.',
    lead: [
      'To understand Bhutan, you need to look beyond its spectacular landscapes.',
      'Listen to its stories. Walk through its villages. Enter its sacred places. Meet the people who keep its traditions alive.',
      'And take the time to understand a culture shaped over centuries.',
    ],
    sections: [
      {
        heading: 'Discover the stories behind Bhutan',
        paras: [
          'Explore ancient monasteries and temples. Discover magnificent dzongs. Learn about Bhutanese architecture, textiles, crafts, food and traditions.',
          'Experience local festivals when your journey coincides with one — and leave room for the moments that happen naturally along the way.',
        ],
      },
      {
        heading: 'Not just sightseeing',
        paras: ['Depending on your interests, your journey can include opportunities to:'],
        list: [
          'Meet local artisans',
          'Discover traditional Bhutanese crafts',
          'Experience Bhutanese cuisine',
          'Visit villages and rural communities',
          'Explore sacred sites',
          'Learn about traditional architecture',
          'Experience meditation and spiritual traditions',
          'Attend cultural celebrations and festivals',
        ],
      },
      {
        heading: 'A deeper way to travel',
        paras: [
          'Bhutan’s greatest treasures are not always the ones you can photograph.',
          'Sometimes they are a conversation. A story. A prayer. A meal shared. A moment of quiet.',
          'These are the experiences that remain long after the journey ends.',
        ],
      },
    ],
    cta: 'Create your cultural journey',
  },
  {
    slug: 'himalayan-adventures',
    title: 'Himalayan Adventures',
    tags: 'Private · Active',
    photo: 'trek',
    tone: 'snow',
    short: 'Experience Bhutan’s mountains, forests, valleys and trails.',
    summary:
      'Experience Bhutan’s mountains, forests, valleys and trails through scenic walks, trekking and outdoor adventures.',
    eyebrow: 'Private · Active · Personally curated',
    headline: 'Mountains, forests, valleys and trails.',
    lead: [
      'Experience Bhutan’s mountains, forests, valleys and trails.',
      'Through scenic walks, trekking and outdoor adventures, discover a Kingdom shaped by the Himalayas — at a pace that feels right for you.',
    ],
    sections: [
      {
        heading: 'Out on the trail',
        paras: ['Depending on your interests, fitness and the season, your journey can include:'],
        list: [
          'The hike to Taktsang — Tiger’s Nest Monastery (approx. 5–6 hours round trip)',
          'Himalayan trekking',
          'A walk on the Gangtey Nature Trail in the Phobjikha Valley',
          'The walk to Khamsum Yulley Namgyal Chorten above Punakha',
          'Mountain views from Dochula Pass, when weather permits',
          'White-water rafting in Punakha, subject to season and river conditions',
          'Gentle village walks and forest paths',
        ],
      },
      {
        heading: 'The journey itself',
        paras: [
          'A mountain road disappearing into the clouds. The first view of the Himalayas. The quiet after reaching a sacred place.',
          'Add a trek. Spend longer in a valley. We plan the pace, the trails and the rest days around you.',
        ],
      },
    ],
    cta: 'Plan your adventure',
  },
  {
    slug: 'romance-and-honeymoons',
    title: 'Romance & Honeymoons',
    tags: 'Private · Personal',
    photo: 'romance',
    tone: 'dawn',
    short: 'Private journeys designed around two people and their story.',
    summary:
      'A journey designed around two people, with time for discovery, intimacy, celebration and simply being together.',
    eyebrow: 'Private · Romantic · Personally curated',
    headline: 'Two people. One extraordinary journey.',
    lead: [
      'Some places are beautiful. Some places feel intimate. Bhutan is both.',
      'Imagine beginning your life together surrounded by Himalayan peaks, ancient monasteries, peaceful valleys and the warmth of Bhutanese hospitality.',
      'Your honeymoon should not feel like a package. It should feel like yours.',
    ],
    sections: [
      {
        heading: 'Your honeymoon, your way',
        paras: ['Perhaps you imagine:'],
        list: [
          'A private moment overlooking a Himalayan valley',
          'A peaceful morning in the mountains',
          'A traditional Bhutanese wellness experience',
          'A beautiful dinner after a day of discovery',
          'Walking together through an ancient village',
          'A special cultural experience',
          'Or simply waking somewhere extraordinary with nowhere you need to be',
        ],
        after: 'We help turn those ideas into a journey.',
      },
      {
        heading: 'A balance of discovery & stillness',
        paras: [
          'Your honeymoon should never feel like a schedule. We create a balance between exploration and privacy, culture and relaxation, adventure and stillness.',
          'Spend a morning discovering Bhutan’s heritage. Take the afternoon slowly. Watch the light change across the mountains.',
          'Let the journey become part of your story together.',
        ],
      },
      {
        heading: 'Made for you',
        paras: [
          'Your honeymoon can be designed around your preferred accommodation, interests, pace, experiences and celebration.',
          'Whether you are seeking a short romantic escape or a longer Himalayan adventure, we create the journey around you.',
        ],
      },
    ],
    closing: { heading: 'Begin your story in Bhutan', text: 'Your first journey together deserves to be unforgettable.' },
    cta: 'Plan your honeymoon',
  },
  {
    slug: 'family-journeys',
    title: 'Family Journeys',
    tags: 'Private · Meaningful',
    photo: 'family',
    tone: 'valley',
    short: 'Meaningful experiences designed for every generation.',
    summary:
      'Introduce every generation to Bhutan through culture, nature, adventure and genuine local experiences, with a pace suited to the whole family.',
    eyebrow: 'Private · Meaningful · Every generation',
    headline: 'Bhutan for every generation.',
    lead: [
      'Meaningful experiences designed for every generation.',
      'Introduce every generation to Bhutan through culture, nature, adventure and genuine local experiences, with a pace suited to the whole family.',
    ],
    sections: [
      {
        heading: 'Experiences to share',
        paras: ['Depending on your family’s interests, your journey can include:'],
        list: [
          'A private farmhouse meal or a traditional cooking experience',
          'Archery, Bhutan’s national sport',
          'A local craft workshop or a visit to the Institute for Zorig Chusum',
          'The Takin Preserve in Thimphu',
          'Gentle village walks and time with local families',
          'White-water rafting in Punakha, subject to season and river conditions',
          'Festivals, when your journey coincides with one',
        ],
      },
      {
        heading: 'A pace that suits everyone',
        paras: [
          'Private transportation, personal guiding and flexible itineraries give your family the freedom to experience Bhutan without being tied to someone else’s schedule.',
          'Pause when you want. Stay longer when something captures your imagination. Change the rhythm of your day.',
        ],
      },
    ],
    cta: 'Plan your family journey',
  },
  {
    slug: 'wellness-and-stillness',
    title: 'Wellness & Stillness',
    tags: 'Private · Restorative',
    photo: 'wellness',
    tone: 'forest',
    short: 'A slower journey shaped around nature, reflection and renewal.',
    summary:
      'A slower journey shaped around nature, reflection, spirituality, traditional wellness and renewal.',
    eyebrow: 'Private · Restorative · Slow travel',
    headline: 'Nature, reflection and renewal.',
    lead: [
      'Bhutan rewards those who take their time.',
      'A slower journey shaped around nature, reflection, spirituality, traditional wellness and renewal.',
    ],
    sections: [
      {
        heading: 'Time to slow down',
        paras: ['Depending on your interests, your journey can include:'],
        list: [
          'A traditional hot stone bath',
          'Spa and wellness treatments',
          'Meditation and spiritual traditions',
          'Quiet walks on the Gangtey Nature Trail',
          'Visits to sacred sites, monasteries and temples',
          'Unhurried days in the peaceful valleys of Punakha and Phobjikha',
        ],
      },
      {
        heading: 'Stillness',
        paras: [
          'A quiet morning in the mountains. The sound of a temple bell. The changing light across a Himalayan valley.',
          'Or simply time away from everything.',
        ],
      },
    ],
    cta: 'Plan your wellness journey',
  },
];
