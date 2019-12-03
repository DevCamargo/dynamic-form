<template>
  <Form :form="form" @value="view" @send="send" />
</template>

<script>
// @ is an alias to /src
import Form from "@/components/Form.vue";

export default {
  name: "home",
  components: {
    Form
  },
  created() {
    this.startJson()
  },
  methods: {
    send() {
      // console.log(JSON.stringify(this.json));
      this.form.sections.forEach(section => {
        console.log(`\n${section.label}`)
        section.fields.forEach(field => {
          this.viewFields(field, this.json.sections[section.sectionKey].fields, '')
        });
      });
    },
    viewFields(field, fieldsValue, tab) {
      if (Array.isArray(fieldsValue[field.fieldKey].value)) {
        console.log(`${tab}${field.label}`)
        fieldsValue[field.fieldKey].value.forEach(v => {
          console.log(`\t${tab}${v.value}`)
          field.options.forEach(op => {
            if (v.value == op.value) {
              if (op.fields) {
                op.fields.forEach(f => {
                  this.viewFields(f, v.data, tab + '\t\t')
                });
              }
            }
          })
        });
      }
      else {
        console.log(`${tab}${field.label} ${fieldsValue[field.fieldKey].value}`)
      }
      if (fieldsValue[field.fieldKey].data) {
        field.options.forEach(op => {
          if (op.fields) {
            op.fields.forEach(f => {
              this.viewFields(f, fieldsValue[field.fieldKey].data, tab + '\t')
            });
          }
        })
      }
    },
    view(value, field, section) {
      // console.log(this.json, value);
      this.json.sections[section].fields[field] = {
        value: value[field].value
      }
      // if (this.json) {
        
      // }
      // console.log(value, field, section);
      // console.log(this.json);
    },
    startJson() {
      this.json = {
        sections: {}
      }
      this.form.sections.forEach(s => {
        this.json.sections[s.sectionKey] = {
          fields: {}
        }
        if (s.fields) {
          s.fields.forEach(f => {
            this.json.sections[s.sectionKey].fields[f.fieldKey] = {}
          })
        }
      })
    }
  },
  data() {
    return {
      json: {},
      form: {
        label: "Application for San Diego State University",
        sections: [
          {
            sectionKey: "personal_information",
            label: "PERSONAL INFORMATION",
            fields: [
              {
                fieldKey: "name",
                label: "Name:",
                type: "input"
              },
              {
                fieldKey: "city",
                label: "City:",
                type: "input"
              },
              {
                fieldKey: "state",
                label: "State:",
                type: "input"
              },
              {
                fieldKey: "zipCode",
                label: "Zip code:",
                type: "input"
              },
              {
                fieldKey: "gender",
                label: "Gender:",
                type: "select",
                options: [
                  {
                    value: "Male",
                    label: "Male"
                  },
                  {
                    value: "Female",
                    label: "Female"
                  }
                ]
              },
              {
                fieldKey: "visa",
                label:
                  "Do you have a non-immigrant visa to the U.S. currently?",
                type: "radio",
                options: [
                  {
                    value: "Yes",
                    label: "Yes",
                    fields: [
                      {
                        fieldKey: "type",
                        label: "Type:",
                        type: "select",
                        options: [
                          {
                            value: "M-1",
                            label: "M-1"
                          },
                          {
                            value: "F-1",
                            label: "F-1"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    value: "No",
                    label: "No"
                  }
                ]
              }
            ]
          },
          {
            label: "EDUCATIONAL INFORMATION",
            sectionKey: "educational_information",
            fields: [
              {
                fieldKey: "term",
                label: "Term you expect to enter San Diego State University",
                type: "checkbox",
                options: [
                  {
                    value: "Summer",
                    label: "Summer (May through August)",
                    fields: [
                      {
                        fieldKey: "season",
                        label: "Season:",
                        type: "select",
                        options: [
                          {
                            value: "August through September",
                            label: "August through September"
                          },
                          {
                            value: "October through December",
                            label: "October through December"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    value: "Fall",
                    label: "Fall (August through December)",
                    fields: [
                      {
                        fieldKey: "season",
                        label: "Season:",
                        type: "select",
                        options: [
                          {
                            value: "August through September",
                            label: "August through September"
                          },
                          {
                            value: "October through December",
                            label: "October through December"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                fieldKey: "course",
                label: "Type of course:",
                type: "checkbox",
                options: [
                  {
                    value: "Intensive English",
                    label: "Intensive English"
                  },
                  {
                    value: "Undergraduate Student",
                    label: "Undergraduate Student"
                  },
                  {
                    value: "Graduate Student",
                    label: "Graduate Student",
                    fields: [
                      {
                        fieldKey: "certified",
                        label: "Attach Certified",
                        type: "file",
                        attributes: {
                          accept: '.pdf'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                fieldKey: "learn",
                label:
                  "Please tell us how you first learned about San Diego State University:",
                type: "textarea"
              }
            ]
          },
          {
            label: "DEPENDENT INFORMATION FORM",
            sectionKey: "dependent_information",
            fields: [
              {
                fieldKey: "dependentForm",
                label: "Will you be accompanied by your spouse?",
                type: "question",
                options: [
                  {
                    value: "Yes",
                    label: "Yes",
                    fields: [
                      {
                        fieldKey: "name",
                        label: "Name:",
                        type: "input"
                      },
                      {
                        fieldKey: "course",
                        label: "Type of course",
                        type: "checkbox",
                        options: [
                          {
                            value: "Intensive English",
                            label: "Intensive English"
                          },
                          {
                            value: "Undergraduate Student",
                            label: "Undergraduate Student"
                          },
                          {
                            value: "Graduate Student",
                            label: "Graduate Student"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    value: "No",
                    label: "No"
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  }
};
</script>
