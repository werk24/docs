# W24GDT

Parent object for Geometric Dimensionsing and Toleration Frames, attaching them to the pixel location on the drawing.

| PAYLOAD DICT      |                                                      | EXAMPLE                                      |
| ------------------| -----------------------------------------------------|---------------------------------------------- |
| bounding_polygon <br/>(`List[Tuple[float, float]]`)              | Bounding polygon of the GDT annotation as tuple of x, y coordinates in the pixel coordinate system of the sectional. <br/><br/> NOTE: simple GDTs are represented by a simple rectangle.To support more complex GDTs (e.g., with a Sectional Plane Indicator, we define a polygon) <br/><br/>NOTE: the polygon starts at the top left and is oriented clock-wise. | [(0.1,0.5), (0.2,0.5), (0.2,0.45), (0.1,0.45)] |
| frame<br/>(`W24GDTFrame`)             |  Details on the GDT Frame    | See [W24GDTFrame](../models/w24gdt_frame.md)                         |
| measure_label<br/>(`Optional[W24MeasureLabel]`)             |  Optional size dimension, typically annotated above the feature control frame.<br/><br/>Example: <br/>⌀12.0 + /- 0.1<br/>[⊥\|⌀0.1Ⓜ\| A]    | See [W24Measure](../models/w24measure.md)                         |

!!! NOTE
    The GD&Ts also decribe Sectional Plane Indicators (e.g., ⟨[∥| A]), Orientational Plane Indicators (e.g., ⟨[∥| A]⟩), Directional Feature Indicators (e.g., ←[∥| A]) and Collection Plane Indicators (e.g., ◯[∥| B]). These attributes are currently not available.