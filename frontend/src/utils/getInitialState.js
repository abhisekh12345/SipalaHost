export const getInitialState = () => {
    if (typeof window !== 'undefined') {
      // Check if we are in the browser
      const userInfo = localStorage.getItem('userInfo');
      return userInfo ? JSON.parse(userInfo) : null;
    }
    return null; // Return null if we are on the server
  };