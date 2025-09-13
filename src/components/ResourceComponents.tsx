import { ChevronDown, ChevronRight, FileText } from "lucide-react";
import type { Doc, ExpandedSections } from "../assets/content/resource";

export const DocumentItem: React.FC<{
  doc: Doc;
  selectedDocument: Doc | null;
  onSelect: (d: Doc) => void;
}> = ({ doc, selectedDocument, onSelect }) => (
  <div
    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 border-l-4 ${
      selectedDocument?.id === doc.id
        ? 'bg-blue-50 border-l-blue-500 shadow-sm'
        : 'bg-white border-l-gray-200 hover:bg-gray-50 hover:border-l-gray-300'
    }`}
    onClick={() => onSelect(doc)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') onSelect(doc);
    }}
  >
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 mt-1">
        <FileText className="h-4 w-4 text-gray-500" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">{doc.title}</h4>
        <p className="text-xs text-gray-600 mt-1">{doc.subtitle}</p>
        <p className="text-xs text-gray-500 mt-1">Created {doc.created}</p>
      </div>
    </div>
  </div>
);

export const SidebarSection: React.FC<{
  title: string;
  items: Doc[];
  sectionKey: keyof ExpandedSections;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  expandedSections: ExpandedSections;
  toggleSection: (key: keyof ExpandedSections) => void;
  onSelect: (d: Doc) => void;
  selectedDocument: Doc | null;
}> = ({ title, items, sectionKey, icon: Icon, expandedSections, toggleSection, onSelect, selectedDocument }) => (
  <div className="mb-2">
    <button
      onClick={() => toggleSection(sectionKey)}
      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
      type="button"
    >
      <div className="flex items-center space-x-2">
        <Icon className="h-4 w-4" />
        <span>{title}</span>
      </div>
      {expandedSections[sectionKey] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
    </button>

    {expandedSections[sectionKey] && (
      <div className="mt-2 space-y-2">
        {items.map((doc) => (
          <DocumentItem key={doc.id} doc={doc} selectedDocument={selectedDocument} onSelect={onSelect} />
        ))}
      </div>
    )}
  </div>
);

export const NavigationItem: React.FC<{
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
}> = ({ icon: Icon, label, active = false }) => (
  <div
    className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
      active ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);