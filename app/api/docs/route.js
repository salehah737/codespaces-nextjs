import { NextResponse } from 'next/server';

export async function GET() {
  // API documentation
  const apiDocs = {
    name: "MatMoto-PomenPro API",
    version: "1.0.0",
    description: "API for MatMoto-PomenPro Malaysian vehicle parts scanner application",
    baseUrl: "/api",
    endpoints: [
      {
        path: "/health",
        method: "GET",
        description: "Health check endpoint",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            example: {
              status: "ok",
              timestamp: "2025-05-14T12:00:00.000Z",
              version: "2.1.0",
              environment: "production"
            }
          }
        }
      },
      {
        path: "/brands",
        method: "GET",
        description: "Get all supported vehicle brands",
        parameters: [],
        responses: {
          "200": {
            description: "List of brands",
            example: {
              brands: [
                {
                  id: "yamaha",
                  name: "Yamaha",
                  // other brand properties
                }
              ],
              count: 1
            }
          }
        }
      },
      {
        path: "/models",
        method: "GET",
        description: "Get vehicle models",
        parameters: [
          {
            name: "brand",
            in: "query",
            description: "Filter by brand name",
            required: false,
            type: "string"
          },
          {
            name: "category",
            in: "query",
            description: "Filter by category (car, motorcycle, scooter)",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "List of models",
            example: {
              models: [
                {
                  id: "y15zr",
                  name: "Y15ZR",
                  brand: "Yamaha",
                  // other model properties
                }
              ],
              groupedModels: {
                "Yamaha": [
                  // models
                ]
              },
              count: 1,
              query: {
                brand: "yamaha",
                category: "motorcycle"
              }
            }
          }
        }
      },
      {
        path: "/parts/search",
        method: "GET",
        description: "Search for vehicle parts",
        parameters: [
          {
            name: "q",
            in: "query",
            description: "Search query",
            required: false,
            type: "string"
          },
          {
            name: "brand",
            in: "query",
            description: "Filter by brand name",
            required: false,
            type: "string"
          },
          {
            name: "model",
            in: "query",
            description: "Filter by model name",
            required: false,
            type: "string"
          },
          {
            name: "category",
            in: "query",
            description: "Filter by part category",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "Search results",
            example: {
              results: [
                {
                  id: "ym-y15-oil-filter",
                  name: "Oil Filter",
                  partNumber: "5TL-13440-00",
                  // other part properties
                }
              ],
              count: 1,
              query: {
                q: "oil filter",
                brand: "yamaha",
                model: "y15zr",
                category: ""
              }
            }
          },
          "400": {
            description: "Bad request",
            example: {
              error: "Please provide at least one search parameter"
            }
          }
        }
      }
    ]
  };
  
  return NextResponse.json(apiDocs);
}