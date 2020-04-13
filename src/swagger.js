const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'API Representation',
    description: 'API representation using Swagger',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  host: 'localhost:1234',
  basePath: '/',
  tags: [
    {
      name: 'List',
      description: 'API for address list in the system.'
    }
  ],
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/list': {
      post: {
        tags: ['List'],
        description: 'Create new address in system.',
        parameters: [
          {
            name: 'list',
            in: 'body',
            description: 'User that we want to create',
            schema: {
              $ref: '#/definitions/List'
            }
          }
        ],
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'New address is created',
            schema: {
              $ref: '#/definitions/List'
            }
          }
        }
      },
      get: {
        tags: ['List'],
        summary: 'Get all records in system',
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Lists'
            }
          }
        }
      }
    },
    '/list/{id}': {
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'ID of address that we want to find',
          type: 'string'
        }
      ],
      get: {
        tags: ['List'],
        summary: 'Get address details with given ID',
        responses: {
          '200': {
            description: 'Address is found.',
            schema: {
              $ref: '#/definitions/List'
            }
          }
        }
      },
      delete: {
        summary: 'Delete address with given ID',
        tags: ['List'],
        responses: {
          '200': {
            description: 'Address is deleted.',
            schema: {
              $ref: '#/definitions/List'
            }
          }
        }
      },
      put: {
        summary: 'Update address with give ID',
        tags: ['List'],
        parameters: [
          {
            name: 'user',
            in: 'body',
            description: 'Address with new values of properties.',
            schema: {
              $ref: '#/definitions/List'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Address is updated',
            schema: {
              $ref: '#/definitions/List'
            }
          }
        }
      }
    }
  },
  definitions: {
    List: {
      required: ['_id', 'lat', 'lng', 'address'],
      properties: {
        _id: {
          type: 'string',
          unique: true
        },
        lat: {
          type: 'number'
        },
        lng: {
          type: 'number'
        },
        address: {
          type: 'string'
        }
      }
    },
    Lists: {
      type: 'array',
      $ref: '#/definitions/List'
    }
  }
}
export default swaggerDocument
