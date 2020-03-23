# API

We have opted to use a combination of an HTTPS and Websockets Connection to allow the client to sit behind a firewall without the ability to provide a publicly available callback URL -> websockets

The API is has three components that interact with each other:

1. Authentication Client
2. Techread HTTPS Client
3. Techread Secure Websockets Client

!!! note
    If you need the ability to submit a techread request, but have no access to websockets (e.g., because your programming language does not provide easy access), let us know and we will provide a HTTPS-only API endpoint.


## Authentication Client

The Authentication Client allows you to obtain a JWT Token from AWS Cognito (see [Basics/Authentication](/basics/authentication)). This Token needs to be added to each HTTPS and WSS request as `Authorization: Bearer ...`.
Obtaining the Token is straight-foward, mainly because frameworks for many languages exist. See [Github/werk24/werk24/auth_client.py](https://github.com/werk24/werk24/blob/master/werk24/auth_client.py) for a python-based reference implementation.

## Techread HTTPS Client

The Techread HTTPS Client is used to

1. Upload Technical Drawings
2. Upload Models
3. Download binary Ask Responses

## Techread WSS Client

The Techread WSS Client is used to:

1. Initiate a Request
2. Listen to Responses in "near-real-time"

## The Python Client

To make your life as developer as easy as possible, we have implemented a reference client in python.
See [API/TechreadClient](/api/techread-client) for details.