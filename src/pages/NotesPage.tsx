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
  Menu,
  ChevronLeft,
} from 'lucide-react';
import { documents, type Doc, type ExpandedSections } from '../assets/content/notes.ts';
import { NavigationItem, SidebarSection } from '../components/ResourceComponents.tsx';
import NavBar from '../components/NavBar.tsx';


const Notes: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<Doc | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    mathematics1: false,
    mathematics2: false,
    mathematics3: false,
    mathematics4: false,
    mathematics5: false,
    mathematics6: false,
    mathematics7: false,
    mathematics8: false,
    structuralengineering: false,
  });

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const selectDocument = (doc: Doc) => {
    setSelectedDocument(doc);
  };


  return (
    <div className='min-h-screen bg-gradient-to-b from-sky-50 to-white'>
        {/* Nav Bar */}
        <NavBar />
        <div className='text-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-900 tracking-tight">My Notes</h1>
        </div>
        <div className="flex">
          {/* Sidebar */}
          <div
            className={`
              ${sidebarOpen ? "auto" : "fixed"}
               z-50 w-60 md:w-80 transform bg-white border-r border-gray-200 flex flex-col 
              bg-gradient-to-b from-sky-50 to-white
              transition-transform duration-300 ease-in-out
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0 md:static md:flex
            `}
          >
  
            {/* Header */}
            {/* <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex        items-center justify-center">
                  <span className="text-white text-sm font-bold">COMP</span>
                </div>
                
              </div>
                  
            </div> */}
                  
            {/* Navigation */}
            {/* <div className="p-4 space-y-2">
              <NavigationItem icon={Home} label="Home" active />
              <NavigationItem icon={FileText} label="Course Outline" />
              <NavigationItem icon={Calendar} label="Timetable" />
              <NavigationItem icon={MessageSquare} label="Forums" />
              <NavigationItem icon={Users} label="Groups" />
            </div> */}
      
            {/* Mathematics Section */}
            <div className="px-4 pb-4 flex-1 flex flex-col overflow-y-auto">
              <h3 className="text-center text-2xl font-bold text-gray-700 mb-3 shrink-0">Mathematics</h3>
              
              {/* Scrollable folder list */}
              <div className="flex-1 overflow-y-auto">
                <SidebarSection
                  title="2021 Entry Alge - Euclidiad"
                  items={documents.mathematics1}
                  sectionKey="mathematics1"
                  icon={FolderOpen}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onSelect={selectDocument}
                  selectedDocument={selectedDocument}
                />
        
                <SidebarSection
                  title="2021 Entry NT - Euclidiad"
                  items={documents.mathematics2}
                  sectionKey="mathematics2"
                  icon={FolderOpen}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onSelect={selectDocument}
                  selectedDocument={selectedDocument}
                />

                <SidebarSection
                  title="2022 Entry NT - Euclidiad"
                  items={documents.mathematics3}
                  sectionKey="mathematics3"
                  icon={FolderOpen}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onSelect={selectDocument}
                  selectedDocument={selectedDocument}
                />

                <SidebarSection
                  title="2023 Advanced NT - MSM IMO Training"
                  items={documents.mathematics4}
                  sectionKey="mathematics4"
                  icon={FolderOpen}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onSelect={selectDocument}
                  selectedDocument={selectedDocument}
                />

                <SidebarSection
                  title="2023 Entry NT - Euclidiad"
                  items={documents.mathematics5}
                  sectionKey="mathematics5"
                  icon={FolderOpen}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onSelect={selectDocument}
                  selectedDocument={selectedDocument}
                />

                <SidebarSection
                  title="2024 Advanced NT - MSM IMO Training"
                  items={documents.mathematics6}
                  sectionKey="mathematics6"
                  icon={FolderOpen}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onSelect={selectDocument}
                  selectedDocument={selectedDocument}
                />

                <SidebarSection
                  title="2024 Intermediate NT - MSM Senior 2 Training"
                  items={documents.mathematics7}
                  sectionKey="mathematics7"
                  icon={FolderOpen}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onSelect={selectDocument}
                  selectedDocument={selectedDocument}
                />
        
                <SidebarSection
                  title="2025 Advanced NT - MSM IMO Training"
                  items={documents.mathematics8}
                  sectionKey="mathematics8"
                  icon={FolderOpen}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onSelect={selectDocument}
                  selectedDocument={selectedDocument}
                />
              </div>
            </div>

            {/* Structural Engineering Section */}
            <div className="px-4 pb-4 flex-1 flex flex-col overflow-y-auto">
              <h3 className="text-center text-2xl font-bold text-gray-700 mb-3 shrink-0">Structural Engineering</h3>
              
              {/* Scrollable folder list */}
              <div className="flex-1 overflow-y-auto">
                <SidebarSection
                  title="Civil Engineering"
                  items={documents.structuralengineering}
                  sectionKey="structuralengineering"
                  icon={FolderOpen}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  onSelect={selectDocument}
                  selectedDocument={selectedDocument}
                />
              </div>
            </div>
          </div>
              
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Toggle button (only shows on small screens) */}
              <button 
                className="md:hidden text-sky-900 inline-flex items-center space-x-2 border-2 border-sky-200 bg-white hover:bg-sky-50 rounded-xl m-4 px-3 py-2 shadow-md"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <ChevronLeft className="w-6 h-6" />
                <p>Toggle Sidebar</p>
              </button>
            {selectedDocument ? (
              <>
                {/* Header */}
                
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">         {selectedDocument.title}</h2>
                      
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={selectedDocument.url}
                        download={selectedDocument.filename}
                        
                        className="flex items-center bg-white hover:bg-sky-50        border-2 border-sky-200 hover:border-sky-400 rounded-xl        transition-all duration-300 transform hover:scale-105          hover:shadow-xl"
                        rel="noreferrer"
                      >
                        
                        <Download className="w-4 h-4 text-sm md:text-lg text-sky-900 m-2" />
                        <span className='text-sm md:text-lg text-sky-900 m-2'>Download</span>
                      </a>
                      <a
                        href={selectedDocument.url}
                        target="_blank"
                        className="flex items-center bg-white hover:bg-sky-50        border-2 border-sky-200 hover:border-sky-400 rounded-xl        transition-all duration-300 transform hover:scale-105          hover:shadow-xl"
                        rel="noopener noreferrer"
                      >
                        
                        <ExternalLink className="w-6 h-6 text-sm md:text-lg text-sky-900 m-2" />
                        <span className='text-sm md:text-lg text-sky-900 m-2'>View in browser</      span>
                      </a>
                    </div>
                  </div>
                </div>
              
                {/* Document Viewer */}
                <div className="flex-1 bg-gray-100 p-4">
                  <div className="bg-white rounded-lg shadow-lg h-full relative w-full pb-[56.25%]">
                    <iframe
                      src={selectedDocument.url}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
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
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Select a        Document</h3>
                  <p className="text-gray-600">Choose a document from the sidebar        to view it here.</p>
                </div>
              </div>
            )}
            </div>
        </div>
    </div>
    
  );
};

export default Notes;
