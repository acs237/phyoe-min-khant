import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Home,
  Calendar,
  Users,
  MessageSquare,
  FolderOpen,
} from 'lucide-react';
import { documents, type Doc, type ExpandedSections } from '../assets/content/resource.ts';
import { NavigationItem, SidebarSection } from '../components/ResourceComponents.tsx';

const Resources: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<Doc | null>(null);
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    courseWork: true,
    lectures: true,
    assignments: false,
  });

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const selectDocument = (doc: Doc) => {
    setSelectedDocument(doc);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-100 to-white">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            {/* <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">COMP</span>
            </div> */}
            <div>
              <h1 className="sm:text-xl md:text-4xl font-extrabold text-sky-900 tracking-tight font-bold text-gray-900">My Resources</h1>
            </div>
          </div>

        </div>

        {/* Navigation */}
        {/* <div className="p-4 space-y-2">
          <NavigationItem icon={Home} label="Home" active />
          <NavigationItem icon={FileText} label="Course Outline" />
          <NavigationItem icon={Calendar} label="Timetable" />
          <NavigationItem icon={MessageSquare} label="Forums" />
          <NavigationItem icon={Users} label="Groups" />
        </div> */}

        {/* Course Work Section */}
        <div className="px-4 pb-4 flex-1 overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Course Work</h3>

          <SidebarSection
            title="Lectures and Labs"
            items={documents.lectures}
            sectionKey="lectures"
            icon={FileText}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            onSelect={selectDocument}
            selectedDocument={selectedDocument}
          />

          <SidebarSection
            title="Software and Robots"
            items={documents.software}
            sectionKey="courseWork"
            icon={FolderOpen}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            onSelect={selectDocument}
            selectedDocument={selectedDocument}
          />

          <SidebarSection
            title="Assignments/Projects"
            items={documents.assignments}
            sectionKey="assignments"
            icon={FileText}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            onSelect={selectDocument}
            selectedDocument={selectedDocument}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {selectedDocument ? (
          <>
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedDocument.subtitle}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Resource created {selectedDocument.created}</span>
                    <span>file: {selectedDocument.filename}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a
                    href={selectedDocument.url}
                    download={selectedDocument.filename}
                    
                    className="flex items-center bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    rel="noreferrer"
                  >
                    <Download className="text-l text-sky-900 m-2" />
                    <span className='text-l text-sky-900 m-2'>Download</span>
                  </a>
                  <a
                    href={selectedDocument.url}
                    target="_blank"
                    className="flex items-center bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="text-l text-sky-900 m-2" />
                    <span className='text-l text-sky-900 m-2'>View in browser</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Document Viewer */}
            <div className="flex-1 bg-gray-100 p-4">
              <div className="bg-white rounded-lg shadow-lg h-full">
                <iframe
                  src={selectedDocument.url}
                  className="w-full h-full rounded-lg"
                  title={selectedDocument.title}
                />
              </div>
            </div>
          </>
        ) : (
          /* Welcome Message */
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Select a Document</h3>
              <p className="text-gray-600">Choose a document from the sidebar to view it here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
