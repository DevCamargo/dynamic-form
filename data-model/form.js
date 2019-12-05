let form;

form = {
  _id: "Object ID",
  label: String,
  sections: [
    {
      $ref: "sections",
      $id: "Object ID"
    }
  ]
};

form = {
  _id: "Object ID",
  sections: [
    {
      label: "String",
      sectionKey: "String",
      description: "String",
      fields: [
        {
          // input text | text area | date
          key: "String",
          label: "String",
          description: "String",
          type: "String",
          required: "Boolean"
        },
        {
          // radio | checkbox | select
          key: "String",
          label: "String",
          description: "String",
          type: "String",
          options: [
            {
              value: "String",
              label: "String"
            }
          ],
          required: "Boolean"
        },
        {
          // file
          key: "String",
          label: "String",
          description: "String",
          type: "String",
          category: "String",
          required: "Boolean"
        }
      ]
    }
  ]
};

application = {
  _id: "Object ID",
  formID: "Object ID",
  data: {
    "<section.key>": {
      "<field.key>": {
        value: "Any" 
      }
    }
  }
};
