# W24GDTFrame

Representation of the Geometric Dimensioning and Toleration frame

| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| gdt_id <br/>(`UUID4`)              |  Unique id of the GDT | "5843d9ca-d4b6-44a6-a152-47d85bf18cb8" |
| blurb<br/>(`str`)                 |String representation of the label for human consumption | "[⌖\|⌀0.3Ⓜ\|A\|B\|C]" |
| characteristic<br/>(`W24GDTCharacteristic`)                 |Section for gemetric characteristic e.g.: ⌓ | see [W24GDTCharacteristic](../models/w24gdt_characteristic.md)                         |
| zone_shape<br/>(`W24GDTZoneShape`)                 |Tolerance zone: shape e.g, S⌀ | see [W24GDTZoneShape](../models/w24gdt_zone_shape.md)                         |
| zone_value<br/>(`Optional[W24GDTZoneValue]`)                 |GDT value: e.g., 0.03| see [W24GDTZoneValue](../models/w24gdt_zone_value.md)                         |
| zone_combinations<br/>(`List[W24GDTZoneCombination]`)                 |Ordered list of zone combinations, e.g., CZ, SZ| see [W24GDTZoneCombination](../models/w24gdt_zone_combination.md)                         |
| zone_offset<br/>(`Optional[W24GDTZoneOffset]`)                 |Optional specified offset, e.g., UZ-0.2| see [W24GDTZoneCombination](../models/w24gdt_zone_offset.md)                         |
| zone_constraint<br/>(`Optional[W24GDTZoneConstraint]`)                 |Optional zone constraint: e.g., OZ, VA| see [W24GDTZoneConstraint](../models/w24gdt_zone_constraint.md)                         |
| feature_associated<br/>(`Optional[W24GDTFeatureAssociated]`)                 | Associated toleraced feature| see [W24GDTFeatureAssociated](../models/w24gdt_feature_associated.md)                         |
| feature_derived<br/>(`Optional[W24GDTFeatureDerived]`)                 | Derived Feature |  see [W24GDTFeatureDerived](../models/w24gdt_feature_derived.md)                         |
| reference_association<br/>(`Optional[W24GDTReferenceAssociation]`)                 | Derived Feature |  see [W24GDTReferenceAssociation](../models/w24gdt_reference_association.md)                         |
| reference_parameter<br/>(`Optional[W24GDTReferenceParameter]`)                 | Reference element parameter |  see [W24GDTReferenceParameter](../models/w24gdt_reference_parameter.md)                         |
| material_condition<br/>(`Optional[W24GDTMaterialCondition]`)                 | Material condition|  see [W24GDTMaterialCondition](../models/w24gdt_material_condition.md)                         |
| material_condition<br/>(`Optional[W24GDTState]`)                 | State: FREE or None|  see [W24GDTState](../models/w24gdt_state.md)                         |
| data<br/>(`List[W24GDTDatum]`)                 | Ordered list of GDT data|  see [W24GDTDatum](../models/w24gdt_datum.md)                         |
