---
sidebar_position: 8
---

# Flexbox

Redbrick comes with frequently used flexbox classes.

- For simplicity, Redbrick provides only basic flexbox classes.
- You can add **device specifiers(-l, -t, -m)** with flexbox classes to make it responsive.
- More classes will be added soon.

| Class     | Laptop      | Tablet      | Mobile      | Use                                                                      |
| --------- | ----------- | ----------- | ----------- | ------------------------------------------------------------------------ |
| fl-row    | fl-row-l    | fl-row-t    | fl-row-m    | Aligns all the underlying content in a row.                              |
| fl-col    | fl-col-l    | fl-col-t    | fl-col-m    | Aligns all the underlying content in a column.                           |
| fl-center | fl-center-l | fl-center-t | fl-center-m | Aligns any underlying content in the center horizontally and vertically. |

## Justify

| Class                    | Use                                                                   |
| ------------------------ | --------------------------------------------------------------------- |
| fl-justify-center        | Centers the content in the main axis.                                 |
| fl-justify-space-between | Positions the content with equal space between them on the main axis. |
| fl-justify-space-around  | Positions the content with equal space around them on the main axis.  |
| fl-justify-space-evenly  | Evenly positions the content on the main axis.                        |
| fl-justify-flex-end      | Puts the content at the end on the main axis.                         |
| fl-justify-flex-start    | Puts the content at the start on the main axis.                       |

**Device specifiers(-l, -t, -m)** can also be used with justify classes.

## Align

| Class                  | Use                                                                    |
| ---------------------- | ---------------------------------------------------------------------- |
| fl-align-center        | Centers the content in the cross axis.                                 |
| fl-align-space-between | Positions the content with equal space between them on the cross axis. |
| fl-align-space-around  | Positions the content with equal space around them on the cross axis.  |
| fl-align-space-evenly  | Evenly positions the content on the cross axis.                        |
| fl-align-flex-end      | Puts the content at the end on the cross axis.                         |
| fl-align-flex-start    | Puts the content at the start on the cross axis.                       |

**Device specifiers(-l, -t, -m)** can also be used with align classes.

- With **fl-row** ---> main axis is **left to right** & cross axis is **top to bottom**.
- With **fl-col** ---> main axis is **top to bottom** & cross axis is **left to right**.
