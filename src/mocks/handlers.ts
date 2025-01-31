// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
import {  MOCKED_FLOWERS, MOCKED_TOKEN, MOCKED_USER } from './MockData'


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
  http.get(`${API_BASE}account/flowers`, () => {
    return HttpResponse.json(MOCKED_FLOWERS)
  }),
  http.get(`${API_BASE}flowers`, () => {
    return HttpResponse.json(MOCKED_FLOWERS)
  }),
]