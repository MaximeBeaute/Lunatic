# Datepicker component

## Props

|      Props      |  Type  | Default value | Required | Description                               |
| :-------------: | :----: | :-----------: | :------: | ----------------------------------------- |
|       id        | string |       -       |    ✓     | Id of the datepicker                      |
|      label      | string |       -       |    ✓     | Label of the datepicker                   |
| preferences \*  | array  | ["COLLECTED"] |          | Preferences to manage datepicker response |
|   response \*   | object |      {}       |          | Response concerned by the component       |
|   placeholder   | string |      ""       |          | Placeholder of the datepicker             |
|  handleChange   |  func  |       -       |    ✓     | Handler of the datepicker                 |
|    readOnly     |  bool  |     false     |          | Is the datepicker read only               |
|  labelPosition  | string |   "DEFAULT"   |          | Position of the datepicker label          |
|    required     |  bool  |     false     |          | Is the datepicker required                |
|     focused     |  bool  |     false     |          | Is the datepicker focused                 |
| declarations \* | array  |      []       |          | Declarations of the datepicker            |
|     tooltip     |  bool  |     false     |          | Tooltip of the datepicker                 |
|      style      | object |      {}       |          | Style of the datepicker                   |

- `preferences` props has to be an ordered array of `COLLECTED`, `FORCED` or `EDITED`
- `response` props has to be a shape of `{name: string, valueState: object}`
- `declarations` are documented in the `Declarations` component

## Styles

**Datepicker** component has for classes `datepicker-lunatic`.