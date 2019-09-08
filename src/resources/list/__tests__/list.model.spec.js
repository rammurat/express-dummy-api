import { List } from '../list.model'

describe('List model', () => {
  describe('schema', () => {
    test('lat', () => {
      const name = List.schema.obj.lat
      expect(name).toEqual({
        type: Number,
        required: true,
        trim: true,
        maxlength: 50
      })
    })

    test('lng', () => {
      const name = List.schema.obj.lng
      expect(name).toEqual({
        type: Number,
        required: true,
        trim: true,
        maxlength: 50
      })
    })

    test('address', () => {
      const name = List.schema.obj.address
      expect(name).toEqual(String)
    })
  })
})
