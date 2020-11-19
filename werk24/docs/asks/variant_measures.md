
## W24Variant

Each sheet may describe one or more Variants, depending on the precense of a W24VariantTable. In most cases a Technical Drawing will only describe one Variant (i.e., one Part), but we see W24VariantTables in about 2-5% of the files. So be sure to implement the handling of multiple variants.

### W24VariantMeasures

| PAYLOAD DICT |                                                      | Example                                       |
| ------------ | -----------------------------------------------------|---------------------------------------------- |
| document_id  | `UUID4` -- Unique `UUID` that identifies the document    |  "44200f9b-1bb6-48bc-9370-de8a28e8dbbb"       |
| page_id      | `UUID4` -- Unqiue `UUID` that identifies the page        |  "89f54424-343e-4fd5-8b7d-e09ea5f310fd"       |
| sheet_id     | `UUID4` -- Unqiue `UUID` that identifies the sheet       |  "5bc164d4-df0d-4482-9048-3a84de010abf"       |
| canvas_id    | `UUID4` -- Unqiue `UUID` that identifies the canvas      |  "9e6399a6-0b43-4b47-a416-0918254bba16"       |
| variant_id   | `UUID4` -- Unqiue `UUID` that identifies the variant     |  "2680c8ca-6c74-4665-b293-02552d4f00a5       |
| measures     | List[W24Measure] <br> List of all the Measures that were detected on the Sectional | See [Models/W24Measure](./models/w24measure) |
