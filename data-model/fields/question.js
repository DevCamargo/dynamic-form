let question

question = {
  _id: 'Object ID',
  fieldKey: String,
  label: String,
  type: 'question',
  options: [{
    value: true,
    label: String,
    fields: [{
      $ref: 'fields',
      $id: 'Object ID',
    }]
  }, {
    value: false,
    label: String
  }]
}