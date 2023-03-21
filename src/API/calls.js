import axios from "axios";

export const BASE_URL = "http://localhost:4300/api";

export const AUTH_URL = `${BASE_URL}/convenor-auth`;

export const fetchRegister = (formData) =>
  axios.post(`${AUTH_URL}/register`, formData, {});

export const fetchLogin = (formData) =>
  axios.post(`${AUTH_URL}/login`, formData, {});

export const fetchParticipantDetails = (id) =>
  axios.get(`${BASE_URL}/auth/kriya-id/${id}`, {});
