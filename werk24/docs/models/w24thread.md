
## W24ThreadISOMetric 
Metric ISO Thread following [ISO 1502](https://www.beuth.de/de/norm/din-iso-1502/2872869)

Supports:

* [DIN 14-1](https://www.beuth.de/de/norm/din-14-1/1338963) threads (i.e., diameter < 1mm)
* [DIN 13-1](https://www.beuth.de/de/norm/din-13-1/17218832) threads (i.e., diameter 1..68mm)
* [DIN 13-2](https://www.beuth.de/de/norm/din-13-2/17218741) to [DIN 13-10](https://www.beuth.de/de/norm/din-13-10/17217287) threads (i.e., diameter 1..1000mm)
* [DIN 158-1](https://www.beuth.de/de/norm/din-158-1/2965445) (i.e., cone-shaped threads)

| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| blurb        | `str` <br/><br/> string representation for human interpretation   | M4x1.5        |
| thread_type        | `W24ThreadType` <br/><br/> thread type to facilitate deserialization   | ISO_METRIC        |
| diameter        | `float` <br/><br/> Diameter of the thread in mm. <br/><br/>NOTE: The norms range from 0.1 to 1000mm; however, diameters outside that range are possible (and occur)     | 4        |
| pitch        | `float` <br/><br/> Pitch of the thread in mm. Normed range: 0.25 - 9mm. <br/> <br/>NOTE: the value will only be set if is explicitly stated in the drawing. This behaviour might change in the future and perform an automatic lookup in the DIN standards. If this change would affect your application, please get in touch with us.     | 1.5       |
| handedness        | `W24ThreadHandedness` <br/><br/> Left of right-handedness of the thread. This will be RIGHT unless explicitly described as LEFT in the drawing     | W24ThreadHandedness.RIGHT       |


## W24ThreadUTS 
Unified Thread Standard (UTS) base class for

* UNC - Unified National Coarse Thread
* UNF - Unified National Fine Thread
* UNEF - Unified National Extrafine Thread


| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| blurb        | `str` <br/><br/> string representation for human interpretation   | #0, 1 3/4"        |
| thread_type        | `W24ThreadType` <br/><br/> thread type to facilitate deserialization   | UTS_COARSE / UTS_FINE / UTS_EXTRAFINE / UTS_SPECIAL        |
| uts_size        | `str` <br/><br/> UTS size as string representation. Threads with a diameter < 0.25 inch are written with a leading '#'. Threads with a diameter >= 0.25 inch are represented as fractions with a tailing '"'     | #0, 1 3/4"        |
| diameter        | `float` <br/><br/> Diameter of the thread in mm.     | 4        |
| threads_per_inch        | `float` --Threads per inch <br/><br/> NOTE: The float (rather than int) is chosen to support non-convertional threads as well.    | 3       |
| tolerance_class        | `str` <br/><br/> Tolerance class. Options:  1A, 2A, 3A for external threads and 1B, 2B, 3B for internal threads   | 1A       |


## W24ThreadWhitworth 
Whitworth Thread following ISO 228-1


| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| blurb        | `str` <br/><br/> string representation for human interpretation   | G3/4       |
| thread_type        | `W24ThreadType` <br/><br/> thread type to facilitate deserialization   | WHITWORTH        |
| diameter        | `float` <br/><br/> Diameter of the thread in mm.     | 4        |
| whitworth_size        | `float` <br/><br/>  Size number (for historic reasons not proportional to size)    | 0.75        |


