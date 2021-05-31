import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client();

export const verify = async (idToken: string) => {
  const ticket = await client.verifyIdToken({
    idToken: idToken,
    audience: ['id_1', 'id_2']
  });

  const payload = ticket.getPayload();
  const userId = payload?.sub;
  return userId;
};
