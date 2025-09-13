export type Doc = {
  id: number;
  title: string;
  subtitle: string;
  filename: string;
  created: string;
  url: string;
};

export type ExpandedSections = {
  courseWork: boolean;
  lectures: boolean;
  assignments: boolean;
};

export const documents: {
  lectures: Doc[];
  software: Doc[];
  assignments: Doc[];
} = {
  lectures: [
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      created: '5 days ago',
      url: 'resource/file1.pdf',
    },
    {
      id: 2,
      title: 'ROS Architecture',
      subtitle: 'Lecture Slides: ROS Architecture',
      filename: '2_ROS_Architecture.pdf',
      created: '3 days ago',
      url: 'resource/file2.pdf',
    },
    {
      id: 3,
      title: 'Node Communication',
      subtitle: 'Lecture Slides: Node Communication',
      filename: '3_Node_Communication.pdf',
      created: '1 day ago',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture03_motion_planning.pdf',
    },
  ],
  software: [
    {
      id: 4,
      title: 'Setup Guide',
      subtitle: 'Software Installation Guide',
      filename: 'setup_guide.pdf',
      created: '1 week ago',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture01_intro.pdf',
    },
    {
      id: 5,
      title: 'Troubleshooting',
      subtitle: 'Common Issues and Solutions',
      filename: 'troubleshooting.pdf',
      created: '3 days ago',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture02_state_estimation.pdf',
    },
  ],
  assignments: [
    {
      id: 6,
      title: 'Assignment 1',
      subtitle: 'Basic ROS Programming',
      filename: 'assignment_1.pdf',
      created: '2 days ago',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture03_motion_planning.pdf',
    },
    {
      id: 7,
      title: 'Project Guidelines',
      subtitle: 'Final Project Requirements',
      filename: 'project_guidelines.pdf',
      created: '1 week ago',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture01_intro.pdf',
    },
  ],
};