export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: string
  imageUrl?: string
  tags: string[]
  featured: boolean
  published: boolean
  createdAt: string
  updatedAt: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Finding Peace in Troubled Times',
    slug: 'finding-peace-in-troubled-times',
    excerpt: 'Discover how to maintain inner peace and trust in God even when life feels chaotic and uncertain.',
    content: `
      <h2>Introduction</h2>
      <p>In today's fast-paced world, finding peace can seem like an impossible task. We face challenges at every turn - financial pressures, relationship struggles, health concerns, and spiritual battles. Yet, the Bible promises us a peace that transcends understanding.</p>
      
      <blockquote class="bible-verse">
        "You will keep in perfect peace those whose minds are steadfast, because they trust in you." - Isaiah 26:3
      </blockquote>
      
      <h2>Understanding True Peace</h2>
      <p>True peace isn't the absence of problems; it's the presence of God in the midst of those problems. When we learn to shift our focus from our circumstances to our Creator, we discover a peace that cannot be shaken by life's storms.</p>
      
      <h3>Practical Steps to Finding Peace</h3>
      <ol>
        <li><strong>Daily Prayer and Meditation:</strong> Start each day with intentional time in God's presence, surrendering your worries and inviting His peace.</li>
        <li><strong>Scriptural Foundation:</strong> Memorize and meditate on verses about peace, such as Philippians 4:6-7 and John 14:27.</li>
        <li><strong>Gratitude Practice:</strong> Regularly count your blessings, even in difficult circumstances. Gratitude shifts focus from problems to God's provision.</li>
        <li><strong>Community Support:</strong> Don't walk alone. Share your burdens with trusted believers who can pray with and encourage you.</li>
        <li><strong>Worship Focus:</strong> When anxiety rises, turn to worship. Remind yourself of God's greatness and faithfulness.</li>
      </ol>
      
      <h2>Peace That Passes Understanding</h2>
      <p>The peace God offers isn't like the world's peace. The world offers temporary relief through circumstances changing, but God's peace is deep and abiding, rooted in His unchanging character and promises.</p>
      
      <h3>When Peace Feels Distant</h3>
      <p>There are seasons when God's peace feels distant. During these times, remember:</p>
      <ul>
        <li>God's presence hasn't changed, even if your feelings have</li>
        <li>Peace is often a choice, not just a feeling</li>
        <li>God uses difficult seasons to deepen our trust in Him</li>
        <li>This season will pass, and you'll emerge stronger</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Finding peace in troubled times is not about denying reality but about embracing a greater reality - God's presence with you. As you practice these principles and lean into His promises, you'll discover a peace that sustains you through every storm.</p>
      
      <div class="prayer-focus">
        <h3>Prayer for Peace</h3>
        <p>Lord, thank you for being my peace. When my heart is troubled and my mind anxious, help me remember that You are in control. Teach me to cast my cares upon You and to trust in Your perfect timing and wisdom. Fill me with Your peace that passes understanding, and may I be a testimony of Your faithfulness to others. In Jesus' name, Amen.</p>
      </div>
    `,
    author: 'Apostle Eddy Fany',
    date: '2024-03-12',
    category: 'teaching',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    tags: ['peace', 'faith', 'trust', 'anxiety'],
    featured: true,
    published: true,
    createdAt: '2024-03-12T10:00:00Z',
    updatedAt: '2024-03-12T10:00:00Z'
  },
  {
    id: '2',
    title: 'The Power of Persistent Prayer',
    slug: 'the-power-of-persistent-prayer',
    excerpt: 'Learn why consistency in prayer matters and how to develop a prayer life that transforms circumstances.',
    content: `
      <h2>The Foundation of Persistent Prayer</h2>
      <p>Prayer is not meant to be a last resort but a first response. When we cultivate a lifestyle of persistent prayer, we open doors to God's power and align our hearts with His will.</p>
      
      <h3>Biblical Examples of Persistence</h3>
      <p>Throughout Scripture, we see examples of those who persisted in prayer and saw miraculous results:</p>
      <ul>
        <li>Abraham who waited 25 years for God's promise</li>
        <li>Hannah who prayed for a child until she wept</li>
        <li>Daniel who prayed three times daily despite opposition</li>
        <li>Jesus who often withdrew to pray alone</li>
      </ul>
      
      <h2>Practical Prayer Habits</h2>
      <p>Developing a consistent prayer life requires intentionality and discipline. Here are practical steps to build persistence in prayer.</p>
    `,
    author: 'Pastor Sarah Johnson',
    date: '2024-03-10',
    category: 'devotional',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1498758536668-5bba4e7ee69f?q=80&w=800&auto=format&fit=crop',
    tags: ['prayer', 'persistence', 'faith'],
    featured: false,
    published: true,
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z'
  }
]
