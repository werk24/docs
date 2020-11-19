# Basic Concepts
The Werk24 API uses three simple concepts

* **Drawing Bytes** - they tell use what drawing you want to process

* **Asks** - they tell us what information you are looking for, and

* **Hooks** - they tell the Client how you want to handle the response.

## Drawing Bytes
In order for us to process the file, you need to send it to our API in binary format. You just need to provide us with the binary version of the file and let us worry about the rest.


![](./getting_started/supported_formats.png)

See [API/Drawing Bytes](./api/drawing_bytes) for the list of supported file formats.

## Asks

Asks are your way of telling us what you want to know about the Engineering Drawing. Their naming follows a hierarchical structure. The first keyword after the 'Ask' indicate what object you are querying. 

!!! Example
    All asks that start with the prefix AskPage... concern the details of the Page. For single-page formats, such as PNG or JPEG, the Page object describes the complete picture, just how you submitted it. In multi-page file formats, requesting a AskPage... will yield a result for each Page in the Document.

The following Ask Prefixes exist: [AskPage](ask/ask_page), [AskSheet](ask/ask_sheet), [AskCanvas](ask/ask_canvas), [AskSectional](ask/ask_sectional), and [AskVariant](ask/ask_variant).

## Hooks

The Werk24 API is designed to be asyncronous in nature. This allows you to show a PageThumbnail (typically available in 300-500 milliseconds) to your user, while we extract all Measures from the Technical Drawing (can take up to 50 seconds for complex files).

To keep your own code base as simple as possible, we use the Hook concept, that simply associtates the Ask with a function that shall be called when the information becomes available.

Say, you want to (i) save a page thumbnail and (ii) print the measures on the terminal.
Then you would define the following hook

=== "Python"
    ```python
    hooks = [
        Hook(ask=W24AskPageThumbnail(), function=save_file),
        Hook(ask=W24AskVariantMeasures(), function=print)
    ]
    ```


=== "NodeJS"
    ```javascript

    const hooks = [
        new werk24.Hook(new askLib.W24AskPageThumbnail(), saveFile)
        new werk24.Hook(new askLib.W24AskVariantMeasures(), console.log),
    ];
    ```
