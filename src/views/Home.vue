<template>
  <Form :form="form" />
</template>

<script>
// @ is an alias to /src
import Form from "@/components/Form.vue";

export default {
  name: "home",
  components: {
    Form
  },
  data() {
    return {
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
                label: "Term you expect to enter <INSTITUTION NAME>",
                type: "checkbox",
                options: [
                  {
                    value: "Summer",
                    label: "Summer (May through August)"
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
                        type: "file"
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
