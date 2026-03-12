export interface Project {
  id: string
  title: string
  description: string
  category: string
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold'
  priority: 'low' | 'medium' | 'high'
  startDate: string
  endDate?: string
  estimatedBudget: number
  actualBudget?: number
  progress: number
  location: string
  images: string[]
  updates: ProjectUpdate[]
  team: TeamMember[]
  createdAt: string
  updatedAt: string
}

export interface ProjectUpdate {
  id: string
  date: string
  title: string
  content: string
  images: string[]
  author: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Main Sanctuary Expansion',
    description: 'Expanding the main sanctuary to accommodate 500 additional seats with modern amenities and improved acoustics.',
    category: 'Building',
    status: 'in-progress',
    priority: 'high',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    estimatedBudget: 250000,
    actualBudget: 180000,
    progress: 65,
    location: 'Main Campus - Building A',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb63e9c63?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop'
    ],
    updates: [
      {
        id: '1',
        date: '2024-03-10',
        title: 'Foundation Work Completed',
        content: 'The foundation for the new extension has been completed and inspected. We are now ready to begin framing.',
        images: ['https://images.unsplash.com/photo-1541888946425-d81bb63e9c63?q=80&w=400&auto=format&fit=crop'],
        author: 'Construction Manager'
      },
      {
        id: '2',
        date: '2024-03-01',
        title: 'Ground Breaking Ceremony',
        content: 'We held a successful ground breaking ceremony with church members and local officials present.',
        images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=400&auto=format&fit=crop'],
        author: 'Pastor'
      }
    ],
    team: [
      { id: '1', name: 'John Smith', role: 'Project Manager' },
      { id: '2', name: 'Mike Johnson', role: 'Lead Contractor' },
      { id: '3', name: 'Sarah Williams', role: 'Architect' }
    ],
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-03-10T15:30:00Z'
  },
  {
    id: '2',
    title: 'Youth Center Renovation',
    description: 'Complete renovation of the youth center including new furniture, technology upgrades, and modern decor.',
    category: 'Renovation',
    status: 'planning',
    priority: 'medium',
    startDate: '2024-04-01',
    endDate: '2024-05-15',
    estimatedBudget: 75000,
    progress: 0,
    location: 'Building B - Second Floor',
    images: [
      'https://images.unsplash.com/photo-1576086213369-97a306d5de96?q=80&w=800&auto=format&fit=crop'
    ],
    updates: [],
    team: [
      { id: '1', name: 'Emily Davis', role: 'Interior Designer' },
      { id: '2', name: 'Tom Wilson', role: 'Youth Pastor' }
    ],
    createdAt: '2024-03-05T10:00:00Z',
    updatedAt: '2024-03-05T10:00:00Z'
  },
  {
    id: '3',
    title: 'Parking Lot Resurfacing',
    description: 'Resurfacing and re-striping the main parking lot to improve safety and accessibility.',
    category: 'Infrastructure',
    status: 'completed',
    priority: 'low',
    startDate: '2024-02-01',
    endDate: '2024-02-15',
    estimatedBudget: 45000,
    actualBudget: 42000,
    progress: 100,
    location: 'Main Campus Parking Area',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop'
    ],
    updates: [
      {
        id: '1',
        date: '2024-02-15',
        title: 'Project Completed',
        content: 'Parking lot resurfacing has been completed successfully. New striping improves traffic flow and safety.',
        images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop'],
        author: 'Facilities Manager'
      }
    ],
    team: [
      { id: '1', name: 'Robert Brown', role: 'Facilities Manager' }
    ],
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-02-15T16:00:00Z'
  }
]
