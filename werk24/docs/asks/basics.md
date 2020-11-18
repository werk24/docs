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

# Asks

Asks are your way to tell the Werk24 Techread API what information you would like to learn about the Technical Drawing. We have decided to use this format, as it allows you to specify exactly what you would like to learn about the drawing, and can serve your customer as soon as possible. Time is of the essence!

The intend of this page is to give you a brief overview over the available Ask Types. Please refer to the API reference for a full description.

<div class="mermaid">
graph TD

    Document --1:n--> Page
    Page --1:n--> Sheet
    Page --> PageAsks("
    AskPageThumbnail
    "):::ask

    Sheet --1:1--> VariantTable
    Sheet --1:n--> Sectional
    Sheet --> SheetAsks("
    AskSheetThumbnail<br/>
    "):::ask

    Sectional -.n:m.-> Variant
    VariantTable -.1:m.-> Variant


    Variant --> VariantGDTs("
    AskVariantGDTs<br/>
    "):::ask

    Variant --> VariantMeasures("
    AskVariantMeasures<br/>
    "):::ask
    Sectional --> SectionalAsks("
    AskSectionalThumbnail
    "):::ask

    classDef ask fill:#cad;

</div>
