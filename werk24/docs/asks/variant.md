## W24VariantTable

To make life more interesting, some Technical Drawings contain a seperate specification table that typically looks something like this:

|        | length | width      |
| ------ | ------ | ---------- |
| Type A | 10     | 10 +/- 0.1 |
| Type B | 10     | 12 +/- 0.2 |

A Sheet that contains such a specification table consequently describes multiple W24Variants; in this case the parts "Type A" and "Type B".

!!! Note

    Please get in touch if you are interested in obtaining this information through the API.

## W24Variant

Each sheet may describe one or more Variants, depending on the precense of a [W24VariantTable](#w24variantable). You can think of it as a different term for a Part. In most cases a Technical Drawing will only describe one Variant (i.e., one Part), but we see W24VariantTables in about 2-5% of the files. So be sure to implement the handling of multiple variants.

### W24VariantMeasures

| PAYLOAD DICT |                                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| document_id  | UUID4 -- Example: "44200f9b-1bb6-48bc-9370-de8a28e8dbbb"<br>Unique UUID that identifies the document |
| page_id      | UUID4 -- Example: "89f54424-343e-4fd5-8b7d-e09ea5f310fd"<br>Unqiue UUID that identifies the page     |
| sheet_id     | UUID4 -- Example: "5bc164d4-df0d-4482-9048-3a84de010abf"<br>Unqiue UUID that identifies the sheet    |
| variant_id   | UUID4 -- Example: "0c44364f-e50f-499a-8796-92e2dc907cbd"<br>Unqiue UUID that identifies the variant  |
| measures     | List[W24Measure] <br> List of all the Measures that were detected on the Sectional                   |

## W24Measure

| PAYLOAD DICT      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| line              | Tuple[Tuple[float,float],Tuple[float,float]] -- Example: ((0.1,0.2),(0.5,0.5)) <br> Relative x-y coordinates of the Start/End point of the Measure in the Pixel Coordinate system that the Measure is associated to. Typically this will be the W24AskVariantMeasuresResponse. The coordinates are normalized by the width and height of the associated object (e.g., the sectional). If you want to obtain the absolute position in the original image, you need to consider the following offsets: sectional + canvas + sheet. |
| label             | str -- Example 4.1 +/- 0.2<br> String representation of the label for human consumption                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| size              | float -- Example 4.1 <br>Size of the measure as (signed) float in mm. <br><br> NOTE: For Wrench_sizes this will reflect the actual distance that the measure describes even if the label reads "SW...", but is associated with the short edge distance<br><br>NOTE: For Whitworth_sizes this will reflect the associacted value in mm. If you want to obtain the whitworth_size in inches, you'll find it in the whitworth_size                                                                                                  |
| fit_size          | Optional[str] -- Example h11<br>Fit size according to ISO 286-1 / ISO 286-2.<br><br>NOTE: this value will only be set when the technical drawing explicitly states it. The API does not translate tolerance groups into fit_size equivalents.                                                                                                                                                                                                                                                                                    |
| tolerance_upper   | Optional[float] -- Example 0.2<br>Signed upper tolerance as stated in the drawing.<br><br> NOTE: When a fit size is present, this tolerance will be unset. If you need the API to behave in a different way, please get in touch with a suggestion how to handle inconsistencies between the tolerances and the fit_size                                                                                                                                                                                                         |
| tolerance_lower   | Optional[float] -- Example -0.2<br>Lower Tolerance (See tolerance_upper)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| chamfer_angle     | Optional[float] -- Example 45 for 45° <br>Chamfer angle in degree as indicated on the label                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| wrench_size       | Optional[float] -- Example 4 for SW4<br>Wrench Size in mm                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| whitworth_size    | Optional[float] -- Example 0.125 for G1/8''<br> Whitworth Size in inch                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| thread_type       | Optional[W24MeasureThreadType] -- Example METRIC_STANDARD_THREAD for M...<br>Thread type described by the measure. Currently supported: METRIC_STANDARD_THREAD                                                                                                                                                                                                                                                                                                                                                                   |
| thread_pitch      | Optional[float] -- Example 1.5 for M4x1.5 <br>Thread pitch in mm                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| thread_handedness | Optional[W24MeasureThreadHandedness] -- Example LEFT for M4LH <br> Handedness of the thread. Defaults to RIGHT if not explicitly stated on the drawing                                                                                                                                                                                                                                                                                                                                                                           |
| warnings          | List[W24MeasureWarning] -- List of Warnings that are associated with the measure. See W24MeasureWarning for details                                                                                                                                                                                                                                                                                                                                                                                                              |

### W24MeasureWarning

| PAYLOAD DICT |                                                                  |
| ------------ | ---------------------------------------------------------------- |
| warning_type | W24MeasureWarningType -- Example: UNCONVENTIONAL_TOLERANCE_ORDER |
