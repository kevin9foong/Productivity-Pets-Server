import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client();

// returns a promise
export const verify = async (accessToken: string) => {
  // const info = await client.getTokenInfo(accessToken);
  client.setCredentials({ access_token: accessToken });
  const oauth2 = google.oauth2({
    auth: client,
    version: 'v2'
  });

  return oauth2.userinfo.get();
};

// export const verify = async (accessToken: string) => {
//   const ticket = await client.verifyIdToken({
//     accessToken: accessToken,
//     audience: ['id_1', 'id_2']
//   });

//   const payload = ticket.getPayload();
//   const userId = payload?.sub;
//   return userId;
// };
