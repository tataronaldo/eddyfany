export interface Sermon {
  id: string
  title: string
  description: string
  speaker: string
  date: string
  category: string
  duration: string
  thumbnailUrl?: string
  videoUrl?: string
  audioUrl?: string
  sermonNotes?: string
  bibleVerses: string[]
  tags: string[]
  featured: boolean
  published: boolean
  createdAt: string
  updatedAt: string
}

export const sermons: Sermon[] = [
  {
    id: '1',
    title: 'Finding Peace in Troubled Times',
    description: 'Discover how to maintain inner peace and trust in God even when life feels chaotic and uncertain.',
    speaker: 'Apostle Eddy Fany',
    date: '2024-03-10',
    category: 'Teaching',
    duration: '45:32',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://example.com/video.mp4',
    audioUrl: 'https://example.com/audio.mp3',
    sermonNotes: 'In this powerful sermon, we explore the biblical foundation for finding peace...',
    bibleVerses: ['Isaiah 26:3', 'Philippians 4:6-7', 'John 14:27'],
    tags: ['peace', 'trust', 'faith', 'anxiety'],
    featured: true,
    published: true,
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z'
  },
  {
    id: '2',
    title: 'The Power of Persistent Prayer',
    description: 'Learn why consistency in prayer matters and how to develop a prayer life that transforms circumstances.',
    speaker: 'Pastor Sarah Johnson',
    date: '2024-03-03',
    category: 'Prayer',
    duration: '38:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1498758536668-5bba4e7ee69f?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://example.com/video2.mp4',
    audioUrl: 'https://example.com/audio2.mp3',
    sermonNotes: 'Prayer is not meant to be a last resort but a first response...',
    bibleVerses: ['Luke 18:1-8', '1 Thessalonians 5:17', 'James 5:16'],
    tags: ['prayer', 'persistence', 'faith', 'intercession'],
    featured: false,
    published: true,
    createdAt: '2024-03-03T10:00:00Z',
    updatedAt: '2024-03-03T10:00:00Z'
  }
]
