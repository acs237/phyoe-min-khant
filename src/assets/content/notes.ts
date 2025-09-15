export type Doc = {
  id: number;
  title: string;
  subtitle: string;
  filename: string;
  url: string;
};

export type ExpandedSections = {
  mathematics1: boolean;
  mathematics2: boolean;
  mathematics3: boolean;
  mathematics4: boolean;
  mathematics5: boolean;
  mathematics6: boolean;
  mathematics7: boolean;
  mathematics8: boolean;
  structuralengineering: boolean;
};

export const documents: {
  mathematics1: Doc[];
  mathematics2: Doc[];
  mathematics3: Doc[];
  mathematics4: Doc[];
  mathematics5: Doc[];
  mathematics6: Doc[];
  mathematics7: Doc[];
  mathematics8: Doc[];
  structuralengineering: Doc[];
} = {
  mathematics1: [
    {
      id: 1,
      title: 'HWA101 Fractions and ratios',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'Notes/Math Olympiad/2021-Entry-Alge-Euclidiad/HWA101-Fractions-and-ratios.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    }
  ],
  mathematics2: [
    {
      id: 2,
      title: 'ROS Architecture',
      subtitle: 'Lecture Slides: ROS Architecture',
      filename: '2_ROS_Architecture.pdf',
      url: 'resource/file2.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    },
    {
      id: 1,
      title: 'Introduction to ROS',
      subtitle: 'Lecture Slides: Introduction to ROS',
      filename: '1_2_ROS_2024.pdf',
      url: 'resource/file1.pdf',
    },
  ],
  mathematics3: [
    {
      id: 3,
      title: 'Node Communication',
      subtitle: 'Lecture Slides: Node Communication',
      filename: '3_Node_Communication.pdf',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture03_motion_planning.pdf',
    },
  ],
  mathematics4: [
    {
      id: 3,
      title: 'Node Communication',
      subtitle: 'Lecture Slides: Node Communication',
      filename: '3_Node_Communication.pdf',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture03_motion_planning.pdf',
    },
  ],
  mathematics5: [
    {
      id: 3,
      title: 'Node Communication',
      subtitle: 'Lecture Slides: Node Communication',
      filename: '3_Node_Communication.pdf',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture03_motion_planning.pdf',
    },
  ],
  mathematics6: [
    {
      id: 3,
      title: 'Node Communication',
      subtitle: 'Lecture Slides: Node Communication',
      filename: '3_Node_Communication.pdf',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture03_motion_planning.pdf',
    },
  ],
  mathematics7: [
    {
      id: 3,
      title: 'Node Communication',
      subtitle: 'Lecture Slides: Node Communication',
      filename: '3_Node_Communication.pdf',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture03_motion_planning.pdf',
    },
  ],
  mathematics8: [
    {
      id: 3,
      title: 'Node Communication',
      subtitle: 'Lecture Slides: Node Communication',
      filename: '3_Node_Communication.pdf',
      url: 'https://www.cs.cmu.edu/~16831-f14/notes/F14/16831_lecture03_motion_planning.pdf',
    },
  ],
  structuralengineering: [
    {
      id: 4,
      title: 'CVEN2002 Engineering Computations Notes',
      subtitle: 'CVEN2002 Engineering Computations Notes',
      filename: 'CVEN2002 Engineering Computations Notes.pdf',
      url: 'Notes/Civil Engineering/CVEN2002 Engineering Computations Notes.pdf',
    },
    {
      id: 5,
      title: 'CVEN2400 Mechanics of Solids Notes',
      subtitle: 'CVEN2400 Mechanics of Solids Notes',
      filename: 'CVEN2400 Mechanics of Solids Notes.pdf',
      url: 'Notes/Civil Engineering/CVEN2400 Mechanics of Solids Notes.pdf',
    },
  ],
};