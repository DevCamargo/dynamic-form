let radio 

radio = {
  _id: 'Object ID',
  fieldKey: String,
  label: String,
  type: 'radio',
  options: [{
    value: String,
    label: String,
    fields: [{
      $ref: 'fields',
      $id: 'Object ID',
    }]
  }]
}