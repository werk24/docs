## W24Document & W24Page

As the image below illustrates, a W24Document constists of one or more W24Pages. You can think of it as the pages in the PDF document that you submitted. If you send us an image, the W24Document will have exactly one page: your image. Our algorithm automatically assesses the contents of each page and classifies it either as W24TitlePage or W24Sheet.

![](./W24DocumentIllustration.png)

### W24AskPageThumbnail

The W24AskPageThumbnail will return a thumbnail for each page in the document. You will receive one W24AskPageThumbnailResponse for each Page in the Document.
The

The Page Thumbnail will differ from the original Document in serveral ways:

1. It is _converted to grayscale_, i.e, no matter how colorful the original drawing was, you will always receive a grayscale image in response.
2. It is _denoised_, i.e, various kinds of noise will have been removed

| PAYLOAD DICT |                                                      | EXAMPLE                                      |
| ------------ | -----------------------------------------------------|---------------------------------------------- |
| document_id <br/>(`UUID4`) |Unique `UUID` that identifies the document    |  "44200f9b-1bb6-48bc-9370-de8a28e8dbbb"       |
| page_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the page        |  "89f54424-343e-4fd5-8b7d-e09ea5f310fd"       |

| PAYLOAD URL |                                                       | EXAMPLE                                      |
| ----------- | ------------------------------------------------------|---------------------------------------------- |
| url<br/>(`HttpUrl`)   | Url of the payload (requires token authentication) | https://techread.w24.io/download/1a0230ea-4a96-4522-ae8e-a25aed463a3e |

