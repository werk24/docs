# W24AskVariantGDTs

The W24ASkVariantGDTs returns a list of all Geometric Dimensioning and Tolerancing Frames (GD&Ts) that we found on the Technical Drawing. 

## Background Information
Geometric Dimensioning and Tolerancing (GD&T) is a system for defining and communicating the allowed geometric deviations from the norm geometry. These deviations can conecern the shape, direction, location and run of a feature relative to a reference position. The table below gives you an overview of the available attributes

<table width="100%">
    <tr>
        <th colspan=2>
            Shape
        </th>
        <th colspan=2>
            Direction
        </th>
        <th colspan=2>
            Location
        </th>
        <th colspan=2>
            Run
        </th>
    </tr>
    <tr>
        <td>
            ⏤
        </td>
        <td>
            Straightness
        </td>
        <td>
            ∥ 
        </td>
        <td>
            Parallelism
        </td>
        <td>
            ⌖
        </td>
        <td>
            Position
        </td>
        <td rowspan=4>
            ↗
        </td>
        <td rowspan=4>
            Circular Runout
        </td>
    </tr>
        <tr>
        <td>
            ⏥
        </td>
        <td>
            Flattness
        </td>
        <td>
            ⟂
        </td>
        <td>
            Perpendicularity
        </td>
        <td>
            ◎
        </td>
        <td>
            Concentricity
        </td>
    </tr>
    </tr>
        <tr>
        <td>
            ○
        </td>
        <td>
            Circularity
        </td>
        <td rowspan=2>
            ∠ 
        </td>
        <td rowspan=2>
            Angularity
        </td>
        <td>
            ◎
        </td>
        <td>
            Coaxiality
        </td>
    </tr>
    <tr>
        <td>
            ⌭
        </td>
        <td>
            Cylindricity
        </td>
        <td>
            ⌯
        </td>
        <td>
            Symmetry
        </td>
    </tr>
    <tr>
        <td>
            ⌒
        </td>
        <td>
            Line Profile
        </td>
        <td>
            ⌒
        </td>
        <td>
            Line Profile
        </td>
        <td>
            ⌒
        </td>
        <td>
            Line Profile
        </td>
        <td rowspan=2>
            ⌰
        </td>
        <td rowspan=2>
            Total Runout
        </td>
    </tr>
    <tr>
        <td>
            ⌓
        </td>
        <td>
            Surface Profile
        </td>
        <td>
            ⌓
        </td>
        <td>
            Surface Profile
        </td>
        <td>
            ⌓
        </td>
        <td>
            Surface Profile
        </td>

    </tr>
</table>
<sup>Source:  Hoischen, H., & Hesser, W.(2011): Technisches Zeichnen: Grundlagen, Normen, Beispiele, darstellende Geometrie ; Lehr-, Übungs- und Nachschlagewerk für Schule, Fortbildung, Studium und Praxis ; mit mehr als 100 Tabellen 33., überarb. und aktualisierte Aufl.. Cornelsen. </sup>


## Norms
The details are normed in 

* ISO TC 10 (Technical product documentation), 
* ISO/TC 213 (Dimensional and geometrical product specifications and verification), 
* ASME Y14.41 (Digital Product Defintion Data Practices), 
* ASME 14.5 (Dimensioning and Tolerancing), 
* ASME Y14.5.1M (Mathematical Definition of Dimensioning and Tolerancing Principles), and
* ISO 10303 (Industrial automation systems and integration - Product data representation and exchange).



W24AskVariantMeasures return a list of all measures that we were able to detect on the Technical Drawing. 
Please refer to the [W24MeasureLabel](../models/w24measure_label.md) model to learn how to access the [Thread](../models/w24thread.md), [Tolerance](../models/w24size_tolerance.md), and [Chamfer](../models/w24chamfer.md) information.


## Number of Responses
The API will return one response for every variant-sectional. 
When you process the response, you need to be aware that 

* each document can have multiple pages,
* each page can have multiple sheets,
* each sheet can have multiple canvases,
* each canvas can have multiple variants, and
* each variant can have multiple sectionals 

As result, you will `#Pages x #Sheets x #Canvases x #Variants x #Sectionals` responses to your ask. 


## Payload

| PAYLOAD DICT |                                                      | EXAMPLE                                      |
| ------------ | -----------------------------------------------------|---------------------------------------------- |
| document_id <br/>(`UUID4`) |   Unique `UUID` that identifies the document    |  "44200f9b-1bb6-48bc-9370-de8a28e8dbbb"       |
| page_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the page        |  "89f54424-343e-4fd5-8b7d-e09ea5f310fd"       |
| sheet_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the sheet       |  "5bc164d4-df0d-4482-9048-3a84de010abf"       |
| canvas_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the canvas      |  "9e6399a6-0b43-4b47-a416-0918254bba16"       |
| variant_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the variant     |  "2680c8ca-6c74-4665-b293-02552d4f00a5       |
| sectional_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the sectional     |  "7c02d5cf-2939-443f-a399-2d8ea2fffaa3"       |
| gdt <br/>(`List[W24GDT]`)     | List of all GD&Ts that were detected on the Sectional | See [Models/W24GDT](../models/w24gdt.md) |


