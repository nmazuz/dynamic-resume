export const useRequestParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const configDataString = urlParams.get('configData');
  // console.log("niso ",configDataString);
  try {
    // Parse the configDataString into a JavaScript object
    const configData = configDataString ? JSON.parse(configDataString) : {};
    return configData;
  } catch (error) {
    console.error('Error parsing configuration data:', error);
    // You might want to handle the error or provide a default configuration
    return {};
  }
};
