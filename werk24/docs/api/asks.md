<link rel="stylesheet" type="text/css" href="/mermaid.css">
<script src="https://unpkg.com/mermaid@8.4.8/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>

# Asks

This short diagram gives you an overview over which Asks are available and how they relate to the individual
objects.

<div class="mermaid">
graph TD
    Document --> Page
    Page --> TitlePage
    Page --> Sheet
    Page --> W24AskPageThumbnail:::ask

    Sheet --> SpecificationTable
    Sheet --> Cut
    Sheet --> W24AskSheetThumbnail:::ask

    Cut -.-> Part
    SpecificationTable -.-> Part

    Part --> W24AskPartOverallDimensions:::ask
    Cut --> W24AskCutThumbnail:::ask

    classDef ask fill:#cad;

</div>

## W24AskPageThumbnail

The W24PageThumbnail will return a thumbnail for each page in the document.
The orientation of the thumbnail will follow the orientation of the page in the PDF document.
You will receive one AskResponse per Page.

## W24AskSheetThumbnail

The W24AskSheetThumbnail will return a thumbnail for each sheet in the document.
The thumbnail will be rotated automatically.

## W24AskCutThumbnail

The W24AskCutThumbnail will return a thumbnail for each cut on the sheet.
The thumbnail will be rotated automatically.

## W24AskPartOverallDimensions

The W24AskPartOverallDimensions will return the overall dimensions for each part that is found.
It will return a W24OverallDimensions object, that contains measures for x,y,z as well as an enum indicating the shape.

[ ] TODO: link the API reference
