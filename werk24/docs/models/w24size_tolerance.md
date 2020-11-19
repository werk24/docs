

### W24SizeToleranceFitsizeISO
Fitsize tolerances following the DIN EN ISO 286-1 system. 

| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| blurb             | `str` <br/><br/> String representation of the item for human consumption    | k7                            |
| toleration_type   | `W24SizeToleranceType` <br/><br/> W24SizeToleranceType for deserialization  | `W24SizeToleranceType.FIT_SIZE_ISO`                           |

### W24SizeToleranceOffSize

| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| blurb             | `str` <br/><br/> String representation of the item for human consumption    | 0.5/-0.2                            |
| toleration_type   | `W24SizeToleranceType` <br/><br/> W24SizeToleranceType for deserialization  | `W24SizeToleranceType.OFF_SIZE`                           |
| deviation_lower   | `float` <br/><br/> Lower deviation from the nominal size  | 0.5                           |
| deviation_upper   | `float` <br/><br/> Upper deviation from the nominal size  | -0.2                           |


### W24SizeToleranceGeneral
Indicates that the General Tolerances apply. The General Tolerances are typically defined on the Title Block. 
At this stage, we do not extract the information from the title block. If this is relevant to you, let us know.

| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| blurb             | `str` <br/><br/> String representation of the item for human consumption    | 0.5/-0.2                            |
| toleration_type   | `W24SizeToleranceType` <br/><br/> W24SizeToleranceType for deserialization  | `W24SizeToleranceType.OFF_SIZE`                           |


### W24SizeToleranceTheoreticallyExact
Theoretically Exact Measures after ISO 5458 must not be tolerated. They are indicated by a small rectangular frame.


Example:
```
    +------+
    |  15  |
    +------+
```
NOTE: In practice, we see Technical drawings contain tolerated, theoretically exact measures.


Example:
```
    +------------+
    | 15 +/- 0.2 |
    +------------+
```
In these situations the toleration takes priority.


| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| toleration_type   | `W24SizeToleranceType` <br/><br/> W24SizeToleranceType for deserialization  | `W24SizeToleranceType.THEORETICALLY_EXACT`                           |



### W24SizeToleranceMinimum
Some drawings indiate a minimal length for some measures. 

Example:
```
    min. 20
```

In this case we will return a W24SizeToleranceMinimum.


| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| toleration_type   | `W24SizeToleranceType` <br/><br/> W24SizeToleranceType for deserialization  | `W24SizeToleranceType.MINIMUM`                           |

### W24SizeToleranceMaximum
Some drawings indiate a maximal length for some measures. 

Example:
```
    max. 20
```

In this case we will return a W24SizeToleranceMaximum.


| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| toleration_type   | `W24SizeToleranceType` <br/><br/> W24SizeToleranceType for deserialization  | `W24SizeToleranceType.MAXIMUM`                           |


### W24SizeToleranceApproximation
Some drawings indiate an approximate length for some measures. 

Example:
```
    ~ 20
```

In this case we will return a W24SizeToleranceApproximation.


| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| toleration_type   | `W24SizeToleranceType` <br/><br/> W24SizeToleranceType for deserialization  | `W24SizeToleranceType.APPROXIMATION`                           |
