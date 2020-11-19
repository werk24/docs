# TechreadClient

The Techread Client is a python-based reference implementation to illustrate the communication with the werk24 API. It is actively maintained and will be the lead-implementation for all our development efforts.

## Initiating the Client

You can make a new Techread client in two lines of code.

    from werk24 import W24TechreadClient
    client = W24TechreadClient.make_from_env()

This will create a new client from the environment variables. The client will look for the credentials in the `.werk24` file in your working directory. If the file cannot be found, the Client falls back to the information it can obtain from the `ENVIRONMENT VARIABLES` .

## The Ask Concept

We understand that the individual use-cases can vary largely. Take these two extremes:

1. Application 1 runs a batch job to obtain thumbnails of the main sectional on a Technical Drawing.
2. Application 2 wants to derive the minimal tolerances on an A0 Technical drawing to inform the live-pricing engine. The user remains online and wants to be entertained while she is waiting for the price assessment.

To serve both applications with the same API, we have introduced the concept "Ask", which allows you to define very precicely what you want to learn about the Technical Drawing. Each "Ask" then triggers a response as soon as the information becomes available.

To come back to our application:

 1. Applciation 1 would submit only one Ask:

    -  W24AskSectionalThumbnail()

2. Application 2 would submit multiple Asks

    - W24AskSheetThumbnail() -- gives the user an overview over the complete sheet
    - W24AskSectionalThumbail() -- shows to the user that the individual sectionals have been separated correctly
    - W24AskVariantMeasures() -- delivers the complete information about the Measures (incl. tolerances)

See [API/Asks](./api/asks) for details.

## Defining Hooks

To make your life as developer as easy as possible, we introduced a small `Hook` object that allows you to define

1. The Ask, and
2. What function should be called when the Ask is answered

The defintion is very simple:

    from werk24 import Hook,W24AskVariantMeasures
    hooks = [Hook(ask=W24AskVariantMeasures(), function=print)]

For a full list of available asks, refer to [API/Asks](./api/asks)

## Submitting a Request

Submitting a request requires you to start a session and submit both, a Technical Drawing (as bytes) and a list of hooks

    drawing_path = ...
    drawing_bytes = open(drawing_path, "rb").read()

    async with client as session
        session.read_drawing_with_hooks(
            drawing_bytes,
            hooks)

!!! important Be sure to call the sniplet asyncinously (see Full Example)

## Full Example

Combining all parts from above, we arrive at the full example. When you call the script with the path to a Technical Drawing as first argument, you should shortly after see the measures that were detected on the
Drawing. Be aware that the API will return a response for each sectional that was found on the Canvas.
If your Document contains 2 Pages with 2 Sectionals each, you will receive 4 responses.

    import asyncio
    import sys
    from dotenv import load_dotenv
    from werk24 import W24TechreadClient, W24AskVariantMeasures, Hook

    load_dotenv('.werk24')

    async def main(drawing_path:str) -> None:

        # define the hooks
        hooks = [Hook(ask=W24AskVariantMeasures(), function=print)]

        # make the session and start the reading process
        client = W24TechreadClient.make_from_env()
        async with client as session:
            await session.read_drawing_with_hooks(drawing_bytes, hooks)

    if __name__ == "__main__":
        try:
            drawing_path = sys.argv[1]

            # get the drawing
            with open(drawing_path, "rb") as drawing_handle:
                drawing_bytes = drawing_handle.read()
        except FileNotFoundError:
            sys.exit("File not found")

        except KeyError:
            sys.exit("Drawing Path Required as first argument")

    asyncio.run(main(drawing_path))

## Further Pointers

In case you plan to implement your own client, have a look at the structure of the Python client.
It has three "Sublclients" that deal with the different kind of endpoints.

!!! important

    Please talk to us before you start implementing a client in a different language. We are happy to perform peer reviews and would love to make the client available to other customers.

### Authentication Client

The Authentication Client allows you to obtain a JWT Token from AWS Cognito (see [Basics/Authentication](./basics/authentication)). This Token needs to be added to each HTTPS and WSS request as `Authorization: Bearer ...` .
Obtaining the Token is straight-foward, mainly because frameworks for many languages exist. See [Github/werk24/werk24-python/auth_client.py](https://github.com/werk24/werk24/blob/master/werk24/auth_client.py) for a python-based reference implementation.

### Techread HTTPS Client

The Techread HTTPS Client is used to

1. Upload Technical Drawings
2. Upload Models
3. Download binary Ask Responses

### Techread WSS Client

The Techread WSS Client is used to:

1. Initiate a Request
2. Listen to Responses in "near-real-time"
