
## W24Variant

Each sheet may describe one or more Variants, depending on the precense of a W24VariantTable. In most cases a Technical Drawing will only describe one Variant (i.e., one Part), but we see W24VariantTables in about 2-5% of the files. So be sure to implement the handling of multiple variants.

### W24AskVariantMeasures

W24AskVariantMeasures return a list of all measures that we were able to detect on the Technical Drawing. 
Please refer to the [W24MeasureLabel](../models/w24measure_label.md) model to learn how to access the [Thread](../models/w24thread.md), [Tolerance](../models/w24size_tolerance.md), and [Chamfer](../models/w24chamfer.md) information.


The API will return one response for every variant-sectional. 
When you process the response, you need to be aware that 

* each document can have multiple pages,
* each page can have multiple sheets,
* each sheet can have multiple canvases,
* each canvas can have multiple variants, and
* each variant can have multiple sectionals 

As result, you will `#Pages x #Sheets x #Canvases x #Variants x #Sectionals` responses to your ask. 



| PAYLOAD DICT |                                                      | EXAMPLE                                      |
| ------------ | -----------------------------------------------------|---------------------------------------------- |
| document_id <br/>(`UUID4`) |   Unique `UUID` that identifies the document    |  "44200f9b-1bb6-48bc-9370-de8a28e8dbbb"       |
| page_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the page        |  "89f54424-343e-4fd5-8b7d-e09ea5f310fd"       |
| sheet_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the sheet       |  "5bc164d4-df0d-4482-9048-3a84de010abf"       |
| canvas_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the canvas      |  "9e6399a6-0b43-4b47-a416-0918254bba16"       |
| variant_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the variant     |  "2680c8ca-6c74-4665-b293-02552d4f00a5       |
| sectional_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the sectional     |  "7c02d5cf-2939-443f-a399-2d8ea2fffaa3"       |
| measures <br/>(`List[W24Measure]`)     | List of all the Measures that were detected on the Sectional | See [Models/W24Measure](../models/w24measure.md) |


