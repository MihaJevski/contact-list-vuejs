import api from './request';

/**
 * Get all contacts
 */
export const getAllContactsRequest = () => {
  return api
    .request('contacts')
    .get();
};

/**
 * Get contact by Id
 *
 * @param id
 */
export const getContactRequest = id => api
  .request(`contacts/${id}`)
  .get();

/**
 * Create contact
 */
export const createContactRequest = data => {
  return api
    .request('contacts')
    .withBody(data)
    .post();
};

/**
 * Update contact
 *
 * @param id
 * @param data
 */
export const updateContactRequest = (id, data) => {
  return api
    .request(`contacts/${id}`)
    .withBody(data)
    .put();
};

/**
 * Delete booking
 *
 * @param id
 */
export const deleteContactRequest = id => {
  return api
    .request(`contacts/${id}`)
    .delete();
};
