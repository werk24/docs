# Werk24 Documentation

Welcome to the Werk24 documentation! With Werk24 you can easily develop Software Solutions that understand Technical Drawings. Here we cover everything about the API and its platform integrations.
We offer a client for two languages: python and nodejs. If you need to use our API in a different language, please reach out to us at [info@werk24.biz](mailto:info@werk24.biz).

<table style="padding-top:15px">
        <tr>
                <td>
                        <a href="https://pypi.org/project/werk24/"><img src="https://www.python.org/static/community_logos/python-logo-generic.svg" style="height:80px"></a>
                </td>
                <td>
                        <a href="https://www.npmjs.com/package/werk24"><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" style="height:80px"></a>
                </td>
        </tr>
</table>



## Getting Started

To get started, you might find some of these links relevant:

* New to Werk24? Have a look at the [Quickstart](/docs/basics/quickstart).
* No account yet? Get in touch with our sales team at [info@werk24.biz](mailto:info@werk24.biz).
* Stuck? Feel free to contact our support team at [info@werk24.biz](mailto:info@werk24.biz).

## Feeling Impatient?

Getting started with Werk24 is easier than you might imagine. To make your life as easy as possible, we are providing a Python Client that handles the communication with our backend. All that remains for you to do, is pass the document bytes to the client and tell it what you want to learn about the drawing.

#### Install the python client

=== "Python"
    ```bash
    pip install werk24
    ```

=== "NodeJS"
    ```bash
    npm install werk24
    ```


#### Get the Measures from your Technical Drawing

=== "Python"
    ```python
    from werk24 import Hook, W24TechreadClient, W24AskVariantMeasures

    async def get_measures_from_drawing(drawing_bytes):

        hooks = [Hook(ask=W24AskVariantMeasures(), function=print)]

        async with W24TechreadClient.make_from_env() as session:
            await session.read_drawing_with_hooks(document_bytes,hooks)
    ```


=== "NodeJS"
    ```javascript

    async def get_measures_from_drawing(drawingBytes) {

        const askLib = await werk24.loadAsks();
        const hooks = [new werk24.Hook(new askLib.W24AskVariantMeasures(), console.log)];

        let client = werk24.W24TechreadClient.makeFromEnv();
        try { await client.readDrawingWithHooks(drawingBytes, hooks);}
        catch (e) { console.error(e); } finally { client.close(); }
    }
    ```

That's it.
