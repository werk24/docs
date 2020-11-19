
| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| measure_id <br/>(`UUID4`) |Unqiue `UUID` that identifies the measure     | "15012f90-f755-48cf-b121-7542e88b9ec8"        |
| line <br/>(`Tuple[Tuple[float,float],Tuple[float,float]]`)              | Tuple of the measure's start- and end-coordinates in the Pixel Coordinate system of the sectional. The coordinates are normalized by the width and height of the associated object (e.g., the sectional). If you want to obtain the absolute position in the original image, you need to consider the following offsets: sectional + canvas + sheet. | ((0.1,0.5),(0.2,0.5)) |
| label<br/>(`W24MeasureLabel`)             |  Details on the Measure Label    | See [W24MeasureLabel](../models/w24measure_label.md)                         |
| warnings<br/>(`List[W24MeasureWarning]`)          |  - List of Warnings that are associated with the measure. See W24MeasureWarning for details | [] |
| confidence<br/>(`float`)        |  - Werk24 calculates an internal confidence score for each measure. Depending on your use-case, you might want to consider or discard low-confidence measures. This value allows you to do so. The value ranges from 0.0 to 1.0 | 0.93 |