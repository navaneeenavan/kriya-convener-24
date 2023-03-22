import axios from "axios";

export const BASE_URL = "http://localhost:4300/api";

export const AUTH_URL = `${BASE_URL}/convenor-auth`;
export const REGISTER_URL = `${BASE_URL}/register`;

export const fetchRegister = (formData) =>
  axios.post(`${AUTH_URL}/register`, formData, {});

export const fetchLogin = (formData) =>
  axios.post(`${AUTH_URL}/login`, formData, {});

export const fetchParticipantDetails = (id) =>
  axios.get(`${BASE_URL}/auth/kriya-id/${id}`, {});

export const fetchApplyAttendanceIndividual = (formData) =>
  axios.post(`${REGISTER_URL}/attend/`, formData, {});

export const fetchAttendees = (id) =>
  axios.get(`${REGISTER_URL}/attendees/${id}`);
