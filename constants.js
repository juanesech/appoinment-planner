export const routes ={
  contacts: '/Contacts',
  appointments: '/Appointments',
  home: '/'
};

export const faunaSecret = process.env.FAUNA_SECRET;
export const faunaDomain = process.env.FAUNA_DOMAIN? process.env.FAUNA_DOMAIN: 'db.fauna.com';
