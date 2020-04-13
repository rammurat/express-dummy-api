const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'API representation',
    description: 'API representation using Swagger',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  host: 'localhost:3001',
  basePath: '/api/',
  tags: [
    {
      name: 'List',
      description: 'API for list in the system'
    }
  ],
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/list': {
      post: {
        tags: ['List'],
        description: 'Create new address in system',
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
        tags: ['Lists'],
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
        tags: ['Lists'],
        summary: 'Get user with given ID',
        responses: {
          '200': {
            description: 'User is found',
            schema: {
              $ref: '#/definitions/List'
            }
          }
        }
      },
      delete: {
        summary: 'Delete user with given ID',
        tags: ['Lists'],
        responses: {
          '200': {
            description: 'User is deleted',
            schema: {
              $ref: '#/definitions/List'
            }
          }
        }
      },
      put: {
        summary: 'Update user with give ID',
        tags: ['Lists'],
        parameters: [
          {
            name: 'user',
            in: 'body',
            description: 'User with new values of properties',
            schema: {
              $ref: '#/definitions/List'
            }
          }
        ],
        responses: {
          '200': {
            description: 'User is updated',
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
      required: ['lat', 'lng', 'address'],
      properties: {
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
