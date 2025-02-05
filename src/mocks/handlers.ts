// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
import { MOCKED_DATA, MOCKED_TOKEN, MOCKED_USER } from './MockData'


const API_BASE = import.meta.env.VITE_API_URL
 
export const handlers = [
  http.post(`${API_BASE}account/register`, () => {
    return HttpResponse.json(MOCKED_TOKEN)
  }),
  http.post(`${API_BASE}account/login`, () => {
    return HttpResponse.json(MOCKED_TOKEN)

  }),
  http.post(`${API_BASE}account/refresh`, () => {
    return HttpResponse.json(MOCKED_TOKEN)

  }),
  http.get(`${API_BASE}account/me`, () => {
    return HttpResponse.json(MOCKED_USER)

  }),
  http.get(`${API_BASE}account/birds`, () => {
    return HttpResponse.json(MOCKED_DATA)
  }),
  http.get(`${API_BASE}birds`, () => {
    return HttpResponse.json(MOCKED_DATA)
  }),
]