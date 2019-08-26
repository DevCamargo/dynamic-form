let checkbox

checkbox = {
  _id: 'Object ID',
  fieldKey: String,
  label: String,
  type: 'checkbox',
  options: [{
    value: String,
    label: String,
    fields: [{
      $ref: 'fields',
      $id: 'Object ID',
    }]
  }]
}