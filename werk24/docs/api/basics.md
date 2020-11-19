<link rel="stylesheet" type="text/css" href="/mermaid.css">
<script src="https://unpkg.com/mermaid@8.4.8/dist/mermaid.min.js"></script>
<script>
mermaid.initialize({startOnLoad:true}); 
mermaid.sequenceConfig = {

    diagramMarginX:50,
    diagramMarginY:10,
    boxTextMargin:5,
    noteMargin:10,
    messageMargin:35,
    mirrorActors:true

}; 
</script>

# API

We have opted to use a combination of an HTTPS and Websockets Connection to allow the client to sit behind a firewall without the ability to provide a publicly available callback URL -> websockets

The API is has three components that interact with each other:

1. Authentication Client
2. Techread HTTPS Client
3. Techread Secure Websockets Client

!!! note

    If you need the ability to submit a techread request, but have no access to websockets (e.g., because your programming language does not provide easy access), let us know and we will provide a HTTPS-only API endpoint.

## Communication Flow

To make things a bit clearer, have a quick look at the sequence diagram below that describes a communication flow in which you are asking the W24 Techread API for two things:

1. W24AskPageThumbnail: A Thumbnail of the Page
2. W24AskVariantOverallDimensions: the overall dimensions of all the variants described on the page.

<div class="mermaid">
sequenceDiagram

    participant You
    participant W24 Https
    participant W24 Websocket
    participant AWS Cognito

    rect rgb(200,200,200)

    Note over You, W24 Https: Authenticate
    You->>AWS Cognito: Authenticate
    AWS Cognito -->>You: Token
    end

    rect rgb(200,200,200)

    Note over You, W24 Https: Initiate Request with 2 Asks: <br/>-> W24AskPageThumbnail, <br/> -> W24AskVariantOverallDimensions
    You->>W24 Websocket: Initiate Request with Asks
    W24 Websocket -->>You: RequestId

    You->>W24 Https: Upload Drawing
    You->>W24 Websocket: Start Read Process
    end

    rect rgb(200,200,200)

    Note over You, W24 Https: Response for <br/>  W24AskPageThumbnail
    W24 Websocket -->>You: Response
    You ->> W24 Https: Request `payload_url` 
    W24 Https -->> You: Thumbnail as PNG
    end

    rect rgb(200,200,200)

    Note over You, W24 Https: Response for <br/> W24AskVariantOverallDimensions
    W24 Websocket -->>You: Response
    end

</div>

## Rational

We have decided to use this (rather unusual) format for two main reasons:

### 1. Continuous Information Flow

We want to ensure that you can consume the information whenever it becomes available. So rather than waiting for the complete process to complete (which can take up to 1 minute), you can quickly get the information you need.

### 2. Continuous Extendability

We are constantly learning new things about your use cases and the particularities of the Technical Drawings that you submit (thank you oil and gas... we are having a lot of fun reading about your fanzy standards). This makes it important for us to quickly and easily extend the API capabilities without the need to maintain "legacy APIs". The chosen form allows us to continuously extend the functionality of the API while maintaining backwards-compatability.

An easy example are the units in W24AskVariantOverallDimensions. Currently we quote the measures "as-is" from the Technical Drawing. So, if you submit two otherwise identical drawings, but change the units in one from Milimeter to Inches, you will currently receive the same response. This is clearly not desired and will be improved in the future. When we do, we'll add an attribute to the W24AskVariantOverallDimensions that allows you to choose the behaviour. By default it will mimick the old behaviour.

!!! important

    We urge you to follow the Best Practices on Integration Testing.
    Check this [Article](https://techbeacon.com/devops/6-best-practices-integration-testing-continuous-integration) for example.

## Clients

### The Python Client

To make your life as developer as easy as possible, we have implemented a reference client in python.
See [API/TechreadClient](../api/techread-client) for details.

