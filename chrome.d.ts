declare namespace chrome {
    // Add declarations for chrome APIs you are using in your extension
    // For example:
    namespace storage {
      interface StorageArea {
        get(keys: string | string[] | null, callback: (items: { [key: string]: any }) => void): void;
      }
      // Add more interfaces for other methods or properties if needed
    }
  
    // Add declarations for other chrome APIs if used in your extension
  }
  