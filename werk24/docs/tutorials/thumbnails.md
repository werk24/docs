# Thumbnails

There are many reasons why you might want to obtain a Thumbnail of 
(i) the complete document that you sent us, or 
(ii) parts of it.     

Most useful are probably thumbnails of `Sectionals`. We will thus query the API to return a thumbnail for all sectionals detected in the supplied document. You can obtain thumbnails of the `Page`, `Sheet` and `Canvas` in an analogous manner.

## Define Query Function
Let us start with the communication function. 

It ...

* ... defines what information you request (`W24AskSectionalThumbnail`),
* ... defines what function shall be called when the information becomes available (`handle_thumbnail / handleThumbnail`)
* ... sends the drawing bytes to the API and initiates the request

=== "Python"
    ```python
    from werk24 import Hook, W24TechreadClient, W24AskSectionalThumbnail

    async def get_sectional_thumbnails(drawing_bytes):
        hooks = [Hook(ask=W24AskSectionalThumbnail(), function=handle_thumbnail)]
        async with W24TechreadClient.make_from_env() as session:
            await session.read_drawing_with_hooks(document_bytes,hooks)

    ```


=== "NodeJS"
    ```javascript

    async def getSectionalThumbnails(drawingBytes) {

        const askLib = await werk24.loadAsks();
        const hooks = [new werk24.Hook(new askLib.W24AskSectionalThumbnail(), handleThumbnail)];

        let client = werk24.W24TechreadClient.makeFromEnv();
        try { await client.getSectionalThumbnails(drawingBytes, hooks);}
        catch (e) { console.error(e); } finally { client.close(); }
    }

    ```
    
    import asyncio
    asyncio.run_until_complete(get_sectional_thumbnails(...))
    printMeasuresOfDrawing(...)

## Define the Response Handler
The query function above refered to a function `handle_thumbnail / handleThumbnail`. It is called as soon as the response becomes available.

!!! ATTENTION
    The `handle_thumbnail` will be called multiple times! Once for each sectional on the drawing.

When `handle_thumbnail` is called, the Client passes an object of the type `W24TechreadMessage`. This object has two attributes that we are interested in: `payload_dict` and `payload_bytes`. The `payload_bytes` contain the thumbnail bytes you requested. The `payload_dict` contains a dictionary that carries the associated response details. In the case of `AskSectionalThumbnail`, this will for example contain the  `canvas_id`, which allows to differentiate between sectionals that come from different canvases (Remember, a `Sheet` might contain multiple `Canvases`).

=== "Python"
    ```python

    async def handle_thumbnail(message):
        canvas_id = message.payload_dict.get('canvas_id')
        file_preview = message.payload_bytes[:64]
        print(f"Received Sectional Thumbnail of Canvas {canvas_id}")
        print(f"File starts with {file_preview}")

    ```


=== "NodeJS"
    ```javascript

    async def handleThumbnail(message) {
        const canvasId = message.payload_dict.canvas_id
        const filePreview = message.payload_bytes.substring(0,64)
        console.log(`Received Sectional Thumbnail of Canvas ${canvas_id}`)
        console.log(`File starts with ${file_preview}`)
    }

    ```