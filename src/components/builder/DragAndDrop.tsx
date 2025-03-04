
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  MousePointer, 
  Type, 
  Image, 
  Square, 
  Video, 
  FormInput, 
  Grid, 
  Save, 
  Eye, 
  Share 
} from "lucide-react";

// Define the available components for the builder
const components = [
  { id: "heading", label: "Heading", icon: Type },
  { id: "paragraph", label: "Paragraph", icon: Type },
  { id: "image", label: "Image", icon: Image },
  { id: "button", label: "Button", icon: Square },
  { id: "video", label: "Video", icon: Video },
  { id: "form", label: "Form", icon: FormInput },
  { id: "grid", label: "Grid", icon: Grid },
];

export function DragAndDrop() {
  const [activeTab, setActiveTab] = useState("components");
  const [selectedTool, setSelectedTool] = useState("pointer");
  const [draggedElements, setDraggedElements] = useState<
    Array<{
      id: string;
      type: string;
      x: number;
      y: number;
      width: number;
      height: number;
    }>
  >([]);

  // Handle drag start
  const handleDragStart = (e: React.DragEvent, type: string) => {
    e.dataTransfer.setData("componentType", type);
  };

  // Handle drop on canvas
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData("componentType");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add the new element
    setDraggedElements([
      ...draggedElements,
      {
        id: `${componentType}-${Date.now()}`,
        type: componentType,
        x,
        y,
        width: 200,
        height: 100,
      },
    ]);
  };

  // Allow drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Render component based on type
  const renderComponent = (
    element: {
      id: string;
      type: string;
      x: number;
      y: number;
      width: number;
      height: number;
    }
  ) => {
    const style = {
      position: "absolute" as "absolute",
      left: `${element.x}px`,
      top: `${element.y}px`,
      width: `${element.width}px`,
      height: `${element.height}px`,
    };

    switch (element.type) {
      case "heading":
        return (
          <div style={style} className="bg-white border border-dashed border-gray-300 p-2">
            <h2 className="text-xl font-bold">Heading</h2>
          </div>
        );
      case "paragraph":
        return (
          <div style={style} className="bg-white border border-dashed border-gray-300 p-2">
            <p>This is a paragraph of text. Click to edit.</p>
          </div>
        );
      case "image":
        return (
          <div style={style} className="bg-white border border-dashed border-gray-300 p-2 flex items-center justify-center">
            <div className="text-center">
              <Image className="h-8 w-8 mx-auto text-gray-400" />
              <span className="text-sm text-gray-500">Image</span>
            </div>
          </div>
        );
      case "button":
        return (
          <div style={style} className="bg-white border border-dashed border-gray-300 p-2 flex items-center justify-center">
            <Button size="sm">Click me</Button>
          </div>
        );
      case "video":
        return (
          <div style={style} className="bg-white border border-dashed border-gray-300 p-2 flex items-center justify-center">
            <div className="text-center">
              <Video className="h-8 w-8 mx-auto text-gray-400" />
              <span className="text-sm text-gray-500">Video</span>
            </div>
          </div>
        );
      case "form":
        return (
          <div style={style} className="bg-white border border-dashed border-gray-300 p-2">
            <div className="space-y-2">
              <div className="h-8 bg-gray-100 rounded"></div>
              <div className="h-8 bg-gray-100 rounded"></div>
              <Button size="sm" className="w-full">Submit</Button>
            </div>
          </div>
        );
      case "grid":
        return (
          <div style={style} className="bg-white border border-dashed border-gray-300 p-2 grid grid-cols-2 gap-2">
            <div className="bg-gray-100 rounded h-full"></div>
            <div className="bg-gray-100 rounded h-full"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex">
      {/* Left sidebar */}
      <div className="w-64 border-r border-gray-200 bg-white">
        <div className="flex border-b border-gray-200">
          <button
            className={cn(
              "flex-1 py-3 text-sm font-medium",
              activeTab === "components"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            )}
            onClick={() => setActiveTab("components")}
          >
            Components
          </button>
          <button
            className={cn(
              "flex-1 py-3 text-sm font-medium",
              activeTab === "pages"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            )}
            onClick={() => setActiveTab("pages")}
          >
            Pages
          </button>
        </div>

        {activeTab === "components" && (
          <div className="p-4">
            <div className="space-y-4">
              {components.map((component) => (
                <div
                  key={component.id}
                  className="flex items-center p-2 border border-gray-200 rounded-lg cursor-move hover:bg-gray-50 transition-colors"
                  draggable
                  onDragStart={(e) => handleDragStart(e, component.id)}
                >
                  <component.icon className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-sm">{component.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "pages" && (
          <div className="p-4">
            <div className="space-y-2">
              <div className="p-2 border border-blue-200 bg-blue-50 rounded-lg flex items-center">
                <span className="text-sm font-medium text-blue-700">Home</span>
              </div>
              <div className="p-2 border border-gray-200 rounded-lg flex items-center">
                <span className="text-sm text-gray-700">About</span>
              </div>
              <div className="p-2 border border-gray-200 rounded-lg flex items-center">
                <span className="text-sm text-gray-700">Contact</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-12 border-b border-gray-200 flex items-center px-4 gap-2">
          <div className="flex p-1 rounded-lg bg-gray-100">
            <button
              className={cn(
                "p-1 rounded-md",
                selectedTool === "pointer"
                  ? "bg-white shadow-sm"
                  : "hover:bg-gray-200"
              )}
              onClick={() => setSelectedTool("pointer")}
            >
              <MousePointer className="h-4 w-4 text-gray-700" />
            </button>
          </div>

          <div className="ml-auto flex items-center space-x-2">
            <Button size="sm" variant="outline" className="h-8">
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </Button>
            <Button size="sm" variant="outline" className="h-8">
              <Save className="h-4 w-4 mr-1" />
              Save
            </Button>
            <Button size="sm" className="h-8">
              <Share className="h-4 w-4 mr-1" />
              Publish
            </Button>
          </div>
        </div>

        {/* Canvas */}
        <div
          className="flex-1 bg-gray-50 overflow-auto relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="h-full w-full min-h-[800px] relative border-gray-300 border-dashed">
            {draggedElements.map((element) => (
              <div key={element.id}>{renderComponent(element)}</div>
            ))}
            {draggedElements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-md p-6">
                  <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <MousePointer className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Start building your webpage
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Drag and drop components from the left sidebar onto this canvas to build your website.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right sidebar (properties) */}
      <div className="w-64 border-l border-gray-200 bg-white p-4">
        <div className="text-sm font-medium text-gray-900 mb-4">Properties</div>

        <div className="text-xs text-gray-500 mt-8 text-center">
          Select an element to edit its properties
        </div>
      </div>
    </div>
  );
}
