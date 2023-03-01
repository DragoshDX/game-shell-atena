import jwtDecode from 'jwt-decode';
let initialized = false;
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          console.log(jwtDecode(response.credential));
        },
        scope: 'email profile',
      });

      resolve();
      initialized = true;
    });
  });
};
