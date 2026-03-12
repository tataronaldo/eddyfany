export type MinistryEvent = {
  id: string
  title: string
  tagline: string
  date: string
  location: string
  type: string
  description: string
  ctaLabel: string
  imageUrl: string
}

// Import all event images
import eventImage1 from '../assets/images/1001769799.jpg.jpeg'
import eventImage2 from '../assets/images/1001769713.jpeg'
import eventImage3 from '../assets/images/1001769796.jpg.jpeg'
import eventImage4 from '../assets/images/1001769790.jpg.jpeg'
import eventImage5 from '../assets/images/1001769897.jpg.jpeg'
import eventImage6 from '../assets/images/1001769730.jpg.jpeg'
import eventImage7 from '../assets/images/1001769830.jpg.jpeg'
import eventImage8 from '../assets/images/1001769850.jpg.jpeg'
import eventImage9 from '../assets/images/1001769875.jpg.jpeg'
import eventImage10 from '../assets/images/1001769925.jpg.jpeg'
import eventImage11 from '../assets/images/1001769927.jpg.jpeg'
import eventImage12 from '../assets/images/1001769947.jpg.jpeg'
import eventImage13 from '../assets/images/1001769977.jpg.jpeg'
import eventImage14 from '../assets/images/1001769978.jpg.jpeg'

function img(name: string) {
  // Map image names to imported modules
  const imageMap: { [key: string]: string } = {
    '1001769799.jpg.jpeg': eventImage1,
    '1001769713.jpeg': eventImage2,
    '1001769796.jpg.jpeg': eventImage3,
    '1001769790.jpg.jpeg': eventImage4,
    '1001769897.jpg.jpeg': eventImage5,
    '1001769730.jpg.jpeg': eventImage6,
    '1001769830.jpg.jpeg': eventImage7,
    '1001769850.jpg.jpeg': eventImage8,
    '1001769875.jpg.jpeg': eventImage9,
    '1001769925.jpg.jpeg': eventImage10,
    '1001769927.jpg.jpeg': eventImage11,
    '1001769947.jpg.jpeg': eventImage12,
    '1001769977.jpg.jpeg': eventImage13,
    '1001769978.jpg.jpeg': eventImage14
  }
  
  return imageMap[name] || '/assets/images/hero.png'
}

export const ministryEvents: MinistryEvent[] = [
  {
    id: 'breakthrough-night',
    title: 'Breakthrough Night of Worship',
    tagline: 'An atmosphere of intense worship, prayer and prophetic declarations—live online.',
    date: 'Every Monday · 5:30 AM (WAT)',
    location: 'Online – Live Stream',
    type: 'Worship & Prayer',
    description:
      'Join the entire church family for a powerful time of worship and intercession. Come expectant for fresh fire, direction and breakthrough in every area of your life.',
    ctaLabel: 'Join live',
    imageUrl: img('1001769799.jpg.jpeg')
  },
  {
    id: 'healing-miracle-service',
    title: 'Healing & Miracle Service',
    tagline: 'Jesus still heals. Join online, believe and receive.',
    date: 'Every Tuesday · 8:00 PM (WAT)',
    location: 'Online – Live Service',
    type: 'Healing & Impartation',
    description:
      'A faith-filled service with teaching, testimonies and focused prayer for healing—body, soul and spirit. Invite someone who needs a touch from God.',
    ctaLabel: 'Save my seat',
    imageUrl: img('1001769713.jpeg')
  },
  {
    id: 'youth-encounter',
    title: 'Youth & Young Adults Encounter',
    tagline: 'A weekly online space set apart for teenagers and young adults.',
    date: 'Every Friday · 7:00 PM (WAT)',
    location: 'Online – Zoom & YouTube',
    type: 'Youth & Young Adults',
    description:
      'Expect vibrant worship, real conversations, practical sessions and moments of encounter with the Holy Spirit. God is raising a generation on fire for Jesus.',
    ctaLabel: 'Join the Encounter',
    imageUrl: img('1001769796.jpg.jpeg')
  },
  {
    id: 'leaders-summit',
    title: 'Leaders & Workers Summit',
    tagline: 'Equipping every worker to serve with excellence—online.',
    date: 'First Saturday of every month · 9:00 AM (WAT)',
    location: 'Online – Leadership Room',
    type: 'Leadership & Training',
    description:
      'Vision, training and alignment for leaders, workers and everyone who desires to serve. Grow in character, skill and excellence as we build together.',
    ctaLabel: 'Register',
    imageUrl: img('1001769790.jpg.jpeg')
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach & Food Drive',
    tagline: 'Taking the love of Jesus to our streets through online-coordinated teams.',
    date: 'Last Saturday of every month · 10:00 AM (WAT)',
    location: 'Online-coordinated Outreach',
    type: 'Outreach & Missions',
    description: 'We mobilise outreach teams through our online platforms—serving families through practical support, giving and prayer in their local communities.',
    ctaLabel: 'Volunteer for Outreach',
    imageUrl: img('1001769897.jpg.jpeg')
  },
  {
    id: 'prayer-watch',
    title: 'Midnight Prayer Watch',
    tagline: 'Standing in the gap for our nation and the world through fervent prayer.',
    date: 'Every Wednesday · 12:00 AM (WAT)',
    location: 'Online – Prayer Room',
    type: 'Prayer & Intercession',
    description:
      'Join us for a powerful midnight prayer session focused on spiritual warfare, national transformation, and personal breakthroughs. Experience the power of united prayer.',
    ctaLabel: 'Join the Watch',
    imageUrl: img('1001769730.jpg.jpeg')
  },
  {
    id: 'family-blessing-service',
    title: 'Family Blessing Service',
    tagline: 'Honoring families and seeking God\'s blessing on every home.',
    date: 'Second Sunday of every month · 10:00 AM (WAT)',
    location: 'Online – Family Service',
    type: 'Family & Relationships',
    description:
      'A special service dedicated to families, with teachings on godly relationships, parenting, and receiving God\'s blessings for your household.',
    ctaLabel: 'Attend Service',
    imageUrl: img('1001769830.jpg.jpeg')
  },
  {
    id: 'bible-study-group',
    title: 'Deep Dive Bible Study',
    tagline: 'Exploring the depths of God\'s Word together in community.',
    date: 'Every Thursday · 7:00 PM (WAT)',
    location: 'Online – Study Room',
    type: 'Bible Study & Teaching',
    description:
      'An in-depth study of Scripture with discussion, revelation, and practical application. Perfect for growing in knowledge and faith.',
    ctaLabel: 'Study with Us',
    imageUrl: img('1001769850.jpg.jpeg')
  },
  {
    id: 'womens-empowerment',
    title: 'Women\'s Empowerment Conference',
    tagline: 'Empowering women to walk in their God-given destiny.',
    date: 'Third Saturday of every month · 2:00 PM (WAT)',
    location: 'Online – Women\'s Forum',
    type: 'Women\'s Ministry',
    description:
      'A conference focused on spiritual growth, leadership, and empowerment for women of all ages. Discover your purpose and strength in Christ.',
    ctaLabel: 'Register Now',
    imageUrl: img('1001769875.jpg.jpeg')
  },
  {
    id: 'mens-fellowship',
    title: 'Men\'s Fellowship Breakfast',
    tagline: 'Building godly men through fellowship and mentorship.',
    date: 'First Saturday of every month · 8:00 AM (WAT)',
    location: 'Online – Men\'s Room',
    type: 'Men\'s Ministry',
    description:
      'Start your weekend with fellowship, prayer, and teaching tailored for men. Grow in character and leadership as you connect with other believers.',
    ctaLabel: 'Join the Fellowship',
    imageUrl: img('1001769897.jpg.jpeg')
  },
  {
    id: 'children-ministry',
    title: 'Children\'s Ministry Fun Day',
    tagline: 'Teaching kids about Jesus through fun and interactive activities.',
    date: 'Every Saturday · 11:00 AM (WAT)',
    location: 'Online – Kids Zone',
    type: 'Children\'s Ministry',
    description:
      'A joyful session for children with Bible stories, songs, games, and crafts. Parents are welcome to join and learn how to disciple their kids at home.',
    ctaLabel: 'Bring the Kids',
    imageUrl: img('1001769925.jpg.jpeg')
  },
  {
    id: 'missionary-outreach',
    title: 'Global Missions Update',
    tagline: 'Supporting missionaries and spreading the Gospel worldwide.',
    date: 'Fourth Sunday of every month · 4:00 PM (WAT)',
    location: 'Online – Missions Hub',
    type: 'Missions & Outreach',
    description:
      'Hear from missionaries on the field, learn about global needs, and discover how you can be part of God\'s mission to reach the nations.',
    ctaLabel: 'Support Missions',
    imageUrl: img('1001769927.jpg.jpeg')
  },
  {
    id: 'creative-worship',
    title: 'Creative Worship Night',
    tagline: 'Expressing worship through art, dance, and creative expression.',
    date: 'Every other Friday · 8:00 PM (WAT)',
    location: 'Online – Worship Studio',
    type: 'Worship & Arts',
    description:
      'A night of creative worship featuring dance, drama, and artistic expressions. Experience God\'s presence in new and beautiful ways.',
    ctaLabel: 'Get Creative',
    imageUrl: img('1001769947.jpg.jpeg')
  },
  {
    id: 'financial-stewardship',
    title: 'Financial Stewardship Seminar',
    tagline: 'Learning to manage God\'s resources with wisdom and generosity.',
    date: 'Second Saturday of every month · 10:00 AM (WAT)',
    location: 'Online – Finance Forum',
    type: 'Teaching & Discipleship',
    description:
      'A practical seminar on biblical financial principles, budgeting, giving, and stewarding God\'s blessings for maximum impact.',
    ctaLabel: 'Learn More',
    imageUrl: img('1001769977.jpg.jpeg')
  },
  {
    id: 'senior-citizens-gathering',
    title: 'Golden Years Gathering',
    tagline: 'Honoring our seniors and celebrating life\'s wisdom.',
    date: 'Third Sunday of every month · 3:00 PM (WAT)',
    location: 'Online – Seniors Lounge',
    type: 'Seniors Ministry',
    description:
      'A special gathering for seniors with worship, fellowship, and teachings on living a purposeful life in your golden years.',
    ctaLabel: 'Join Us',
    imageUrl: img('1001769978.jpg.jpeg')
  }
]
