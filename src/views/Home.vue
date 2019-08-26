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
        id: 1,
        sections: [
          {
            id: 1,
            label: "PERSONAL INFORMATION",
            fields: [
              {
                id: "name",
                label: "Name:",
                type: "input",
                attributes: [
                  {
                    required: true
                  }
                ]
              },
              {
                id: "city",
                label: "City:",
                type: "input",
                attributes: [
                  {
                    required: true
                  }
                ]
              },
              {
                id: "state",
                label: "State:",
                type: "input",
                attributes: [
                  {
                    required: true
                  }
                ]
              },
              {
                id: "zipCode",
                label: "Zip code:",
                type: "input",
                attributes: [
                  {
                    required: true
                  }
                ]
              },
              {
                id: "gender",
                label: "Gender:",
                type: "select",
                options: [
                  {
                    value: 0,
                    label: "Male"
                  },
                  {
                    value: 1,
                    label: "Female"
                  }
                ]
              },
              {
                id: "visa",
                label:
                  "Do you have a non-immigrant visa to the U.S. currently?",
                type: "radio",
                options: [
                  {
                    value: 1,
                    label: "Yes",
                    fields: [
                      {
                        id: "type",
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
                    value: 0,
                    label: "No"
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            label: "EDUCATIONAL INFORMATION",
            fields: [
              {
                id: "term",
                label: "Term you expect to enter <INSTITUTION NAME>",
                type: "checkbox",
                options: [
                  {
                    value: 0,
                    label: "Summer (May through August)"
                  },
                  {
                    value: 1,
                    label: "Fall (August through December)",
                    fields: [
                      {
                        id: "season",
                        label: "Season:",
                        type: "select",
                        options: [
                          {
                            value: 0,
                            label: "August through September"
                          },
                          {
                            value: 1,
                            label: "October through December"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: "course",
                label: "Type of course",
                type: "checkbox",
                options: [
                  {
                    value: 0,
                    label: "Intensive English"
                  },
                  {
                    value: 1,
                    label: "Undergraduate Student"
                  },
                  {
                    value: 2,
                    label: "Graduate Student",
                    fields: [
                      {
                        id: "certified",
                        label: "Attach Certified",
                        type: "file",
                        attributes: [
                          {
                            multiple: false,
                            accept: "all"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: "learn",
                label:
                  "Please tell us how you first learned about San Diego State University:",
                type: "textarea"
              },
              {
                id: "dependentForm",
                label: "Will you be accompanied by your spouse?",
                type: "question",
                options: [
                  {
                    value: 1,
                    label: "Yes",
                    fields: [
                      {
                        id: "name",
                        label: "Name:",
                        type: "input",
                        attributes: [
                          {
                            required: true
                          }
                        ]
                      },
                      {
                        id: "course",
                        label: "Type of course",
                        type: "checkbox",
                        options: [
                          {
                            value: 0,
                            label: "Intensive English"
                          },
                          {
                            value: 1,
                            label: "Undergraduate Student"
                          },
                          {
                            value: 3,
                            label: "Graduate Student"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    value: 0,
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
