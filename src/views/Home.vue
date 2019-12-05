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
      console.log(JSON.stringify(this.json));
      this.form.sections.forEach(section => {
        console.log(`\n${section.label}`)
        section.fields.forEach(field => {
          this.viewFields(field, this.json[section.key], '')
        });
      });
    },
    viewFields(field, fieldsValue, tab) {
      if (Array.isArray(fieldsValue[field.key].value)) {
        console.log(`${tab}${field.label}`)
        fieldsValue[field.key].value.forEach(v => {
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
        console.log(`${tab}${field.label} ${fieldsValue[field.key].value}`)
      }
      if (fieldsValue[field.key].data) {
        field.options.forEach(op => {
          if (op.fields) {
            op.fields.forEach(f => {
              this.viewFields(f, fieldsValue[field.key].data, tab + '\t')
            });
          }
        })
      }
    },
    view(value, field, section) {
      value[field].data ? this.json[section][field] = {
        value: value[field].value,
        data: value[field].data
      } : this.json[section][field] = {
        value: value[field].value
      }
    },
    startJson() {
      this.json = {
        sections: {}
      }
      this.form.sections.forEach(s => {
        this.json[s.key] = {}
        if (s.fields) {
          s.fields.forEach(f => {
            this.json[s.key][f.key] = {}
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
            key: "personal_information",
            label: "PERSONAL INFORMATION",
            fields: [
              {
                key: "name",
                label: "Name:",
                type: "input"
              },
              {
                key: "city",
                label: "City:",
                type: "input"
              },
              {
                key: "state",
                label: "State:",
                type: "input"
              },
              {
                key: "zipCode",
                label: "Zip code:",
                type: "input"
              },
              {
                key: "gender",
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
                key: "visa",
                label:
                  "Do you have a non-immigrant visa to the U.S. currently?",
                type: "radio",
                options: [
                  {
                    value: "Yes",
                    label: "Yes",
                    fields: [
                      {
                        key: "type",
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
            key: "educational_information",
            fields: [
              {
                key: "term",
                label: "Term you expect to enter San Diego State University",
                type: "checkbox",
                options: [
                  {
                    value: "Summer",
                    label: "Summer (May through August)",
                    fields: [
                      {
                        key: "season",
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
                        key: "season",
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
                key: "course",
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
                        key: "certified",
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
                key: "learn",
                label:
                  "Please tell us how you first learned about San Diego State University:",
                type: "textarea"
              }
            ]
          },
          {
            label: "DEPENDENT INFORMATION FORM",
            key: "dependent_information",
            fields: [
              {
                key: "dependentForm",
                label: "Will you be accompanied by your spouse?",
                type: "question",
                options: [
                  {
                    value: "Yes",
                    label: "Yes",
                    fields: [
                      {
                        key: "name",
                        label: "Name:",
                        type: "input"
                      },
                      {
                        key: "course",
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
