import request from 'supertest'
import { app } from '../server'
import mongoose from 'mongoose'

describe('api auth', () => {
  test('api should be locked down', async () => {
    let response = await request(app).get('/list')
    expect(response.statusCode).toBe(401)
  })

  test('passes with valid params', async () => {
    const id = mongoose.Types.ObjectId()
    const results = await Promise.all([
      request(app).get('/list'),
      request(app).get(`/list/${id}`),
      request(app).post('/list'),
      request(app).put(`/list/${id}`),
      request(app).delete(`/list/${id}`)
    ])

    results.forEach(res => expect(res.statusCode).not.toBe(401))
  })
})
