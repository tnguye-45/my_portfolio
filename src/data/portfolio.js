// Edit this file to add your own projects, media, and resume info.

export const site = {
  name: 'Thien (Peter) Nguyen',
  tagline: 'Developer & Creative',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  resumePdfUrl: '/resume.pdf', // Put your resume.pdf in public/
};

export const about = {
  headline: 'Hi, I\'m Thien (Peter) Nguyen',
  bio: `I build things for the web and create visual stories. I love turning ideas into code and turning moments into videos and photos. This portfolio is a snapshot of my work—both technical and creative.`,
  skills: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Video Editing', 'Photography'],
};

export const codingProjects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Short description of what this project does and what you used.',
    image: '/projects/project1.jpg', // Add images to public/projects/
    tags: ['React', 'Node.js', 'JavaScript'],
    liveUrl: 'https://your-project-demo.com',
    repoUrl: 'https://github.com/you/repo',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Another project: technologies and outcome.',
    image: '/projects/project2.jpg',
    tags: ['JavaScript', 'API'],
    liveUrl: '',
    repoUrl: 'https://github.com/you/repo2',
  },
  // Add more projects below.
];

export const mediaWork = [
  {
    id: 1,
    title: 'Video / Photo Title',
    type: 'video', // 'video' or 'photo'
    thumbnail: '/media/thumb1.jpg', // For video: poster/thumbnail
    videoUrl: '/media/video1.mp4', // Only for type: 'video'
    imageUrl: '', // Only for type: 'photo'
    description: 'Brief description of this piece.',
  },
  {
    id: 2,
    title: 'Photo Work',
    type: 'photo',
    thumbnail: '/media/photo1.jpg',
    videoUrl: '',
    imageUrl: '/media/photo1.jpg',
    description: 'Description of the photo or series.',
  },
  // Add more video/photo work below.
];

export const resume = {
  experience: [
    { role: 'Job Title', company: 'Company Name', period: '2023 – Present', points: ['Achievement or responsibility.', 'Another point.'] },
    { role: 'Previous Role', company: 'Previous Co', period: '2021 – 2023', points: ['What you did.'] },
  ],
  education: [
    { degree: 'Degree Name', school: 'School Name', year: '2021' },
  ],
};
