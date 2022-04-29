import { faunaDomain, faunaSecret } from "../constants";
import { query, Client } from "faunadb";

const client = new Client({
  secret: faunaSecret,
  domain: faunaDomain
});

export const saveNewContact = (contact) => {
  client.query(
    query.Create(
      query.Collection('contacts'),
      {data:
        contact
      }
    )
  );
}

export const getContacts = async () => {
  try {
    const result = await client.query(
      query.Map(
        query.Paginate(
          query.Documents(
            query.Collection('contacts')
          )
        ), query.Lambda('ref', query.Get(query.Var('ref')))
      )
    );
    const rspData = await result.data;
    return rspData.map(item => item.data);
  } catch(err) {
    console.error(err);
  }
}

export const saveNewAppointment = (appointment) => {
  client.query(
    query.Create(
      query.Collection('appointments'),
      {data:
        appointment
      }
    )
  );
}

export const getAppointments = async () => {
  try {
    const result = await client.query(
      query.Map(
        query.Paginate(
          query.Documents(
            query.Collection('appointments')
          )
        ), query.Lambda('ref', query.Get(query.Var('ref')))
      )
    );
    const rspData = await result.data;
    return rspData.map(item => item.data);
  } catch(err) {
    console.error(err);
  }
}
