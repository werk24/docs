# TechreadClient

The Techread Client is a python-based reference implementation to illustrate the communication with the werk24 API. It is actively maintained and will be the lead-implementation for all our development efforts. That means that new features will become available here first.

!!! important
Downward compatability is very important to us, and we take due care to announce breaking changes with adequate notice. Still, we urge you to implement your own integration tests!

!!! note
Should you be interested in a client for a different language, please get in touch with us.

## Installation

Werk24 provides an easy-to-use and easy-to-extend Python-based client.
Install our Python Client using [pip](https://pip.pypa.io/en/stable/):

    pip install git+https://git@github.com/werk24/werk24-python.git@master#egg=werk24

You can also add this URL directly into your `requirements.txt`.

    ...
    git+https://git@github.com/werk24/werk24-python.git@master#egg=werk24
    ...

## Setting up the environment

During the registration process, we will have provided you with a `.env` file that contains all the necessary authentication details and environment variables. You can either set these variables in you environment manually, or load it with the [dotenv Package](https://github.com/theskumar/python-dotenv).

    pip install dotenv-python

!!! important
Use the `dotenv-python` package, not the `dotenv`

Once you have the dotenv package installed, you can easily load the environment variables like so:

    from dotenv load_dotenv
    load_dotenv()

## Initiating the Client

You can start a new Techread client with two lines. This will create a new client from the environment variables.

    from werk24 import W24TechreadClient
    client = W24TechreadClient.make_from_env()

## Defining your asks

We understand that time is of utter importance when the customer is waiting for a response. To make sure that you can keep your customer entertained, we make the results available as soon as possible. The result is a continuous flow of information, that you can "subscribe" to.

To make your life as developer as easy as possible, we introduced a small `Hook` object that allows you to define

1. The ask, and
2. What function to call one the ask becomes available

Defining your asks can be done as follows

    from werk24 import Hook,W24AskPartOverallDimensions
    hooks = [
        Hook(
            ask=W24AskPartOverallDimensions(),
            function=lambda: msg: print(msg)
        )
    ]

For a full list of available asks, refer to [API/Asks](../api/asks)

## Submitting a Request

Submitting a request requires you to start a session and submit both, a technical drawing (as bytes) and a list of hooks

    async with client as session

        drawing_path = ...
        drawing_bytes = open(drawing_path, "rb").read()

        session.read_drawing_with_hooks(
            drawing_bytes,
            hooks)

!!! important
Be sure to call the sniplet asyncinously (see Full Example)

## Full Example

Combining all parts from above.

    import asyncio
    from werk24 import W24TechreadClient, W24AskPartOverallDimensions, Hook

    async def main():
        hooks = [
            Hook(
                ask=W24AskPartOverallDimensions(),
                function=lambda: msg: print(msg)
            )
        ]

        client = W24TechreadClient.make_from_env()
        async with client as session

            drawing_path = ...
            drawing_bytes = open(drawing_path, "rb").read()

            session.read_drawing_with_hooks(
                drawing_bytes,
                hooks)

    if  __name__ == "__main__":
        asyncio.run(main())

And voilà, you should now see the overall dimensions of all parts printed on bash.
