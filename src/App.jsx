import React, { useState, useEffect } from 'react';
import Button from './components/Button';

function App() {
  const [loading, setLoading] = useState(false);
  
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Button Component</h1>
          <p className="text-gray-600">A versatile and customizable button component</p>
        </div>
        
        <div className="space-y-6">
          {/* Primary Button */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-gray-700">Primary Button</h2>
            <div className="flex flex-wrap gap-2">
              <Button 
                onClick={handleClick} 
                loading={loading}
                icon={<i className="bi bi-lightning-charge-fill"></i>}
              >
                Click Me
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                icon={<i className="bi bi-check-circle"></i>}
              >
                Small
              </Button>
              <Button 
                variant="primary" 
                size="lg"
                icon={<i className="bi bi-arrow-right"></i>}
                iconPosition="right"
              >
                Large
              </Button>
            </div>
          </div>
          
          {/* Secondary Button */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-gray-700">Secondary Button</h2>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="secondary"
                icon={<i className="bi bi-gear"></i>}
              >
                Settings
              </Button>
              <Button 
                variant="secondary" 
                disabled
              >
                Disabled
              </Button>
            </div>
          </div>
          
          {/* Outline Button */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-gray-700">Outline Button</h2>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline"
                icon={<i className="bi bi-bookmark"></i>}
              >
                Bookmark
              </Button>
              <Button 
                variant="outline" 
                fullWidth
                icon={<i className="bi bi-download"></i>}
              >
                Download
              </Button>
            </div>
          </div>
          
          {/* Ghost Button */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-gray-700">Ghost Button</h2>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="ghost"
                icon={<i className="bi bi-trash"></i>}
              >
                Delete
              </Button>
              <Button 
                variant="ghost"
                icon={<i className="bi bi-arrow-counterclockwise"></i>}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
