let form = {
  label: "Application for San Diego State University",
  _id: 0,
  sections: [{
    _id: 0,
    label: "PERSONAL INFORMATION",
    fields: [{
      _id: "name",

      label: "Name:",
      type: "input",
      attributes: [{
        required: true
      }]
    },
    {
      _id: "city",
      label: "City:",
      type: "input",
      attributes: [{
        required: true
      }]
    },
    {
      _id: "state",
      label: "State:",
      type: "input",
      attributes: [{
        required: true
      }]
    },
    {
      _id: "zipCode",
      label: "Zip code:",
      type: "input",
      attributes: [{
        required: true
      }]
    },
    {
      _id: "gender",
      label: "Gender:",
      type: "select",
      options: [{
        value: "Male",
        label: "Male"
      },
      {
        value: "Female",
        label: "Female"
      }]
    },
    {
      _id: "visa",
      label:
        "Do you have a non-immigrant visa to the U.S. currently?",
      type: "radio",
      options: [{
        value: "Yes",
        label: "Yes",
        fields: [{
          _id: "type",
          label: "Type:",
          type: "select",
          options: [{
            value: "M-1",
            label: "M-1"
          },
          {
            value: "F-1",
            label: "F-1"
          }]
        }]
      },
      {
        value: "No",
        label: "No"
      }]
    }]
  },
  {
    _id: 1,
    label: "EDUCATIONAL INFORMATION",
    fields: [{
      _id: "term",
      label: "Term you expect to enter <INSTITUTION NAME>",
      type: "checkbox",
      options: [{
        value: "Summer",
        label: "Summer (May through August)"
      },
      {
        value: "Fall",
        label: "Fall (August through December)",
        fields: [{
          _id: "season",
          label: "Season:",
          type: "select",
          options: [{
            value: "August through September",
            label: "August through September"
          },
          {
            value: "October through December",
            label: "October through December"
          }]
        }]
      }]
    },
    {
      _id: "course",
      label: "Type of course:",
      type: "checkbox",
      options: [{
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
        fields: [{
          _id: "certified",
          label: "Attach Certified",
          type: "file",
          attributes: [{
            multiple: false,
            accept: "all"
          }]
        }]
      }]
    },
    {
      _id: "learn",
      label: "Please tell us how you first learned about San Diego State University:",
      type: "textarea"
    },
    {
      _id: "dependentForm",
      label: "Will you be accompanied by your spouse?",
      type: "question",
      options: [{
        value: "Yes",
        label: "Yes",
        fields: [{
          _id: "name",
          label: "Name:",
          type: "input",
          attributes: [{
            required: true
          }]
        },
        {
          _id: "course",
          label: "Type of course",
          type: "checkbox",
          options: [{
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
          }]
        }]
      },
      {
        value: "No",
        label: "No"
      }]
    }]
  }]
}

let applicationOriginal = {
  _id: 0,
  formId: 0,
  sections: [{
    _id: 0,
    sectionId: 0,
    data: [{
      _id: 0,
      name: "André Camargo"
    }, {
      _id: 1,
      city: "Londrina"
    }, {
      _id: 2,
      state: "Paraná"
    }, {
      _id: 3,
      zipCode: "86086480"
    }, {
      _id: 4,
      gender: 0
    }, {
      _id: 5,
      visa: 1,
      data: [{
        _id: 6,
        type: "M-1"
      }]
    }]
  }, {
    _id: 1,
    sectionId: 1,
    data: [{
      _id: 7,
      term: [{
        value: 0
      }, {
        value: 1,
        data: [{
          _id: 8,
          season: 1
        }]
      }]
    }, {
      _id: 9,
      course: [{
        value: 0
      }, {
        value: 2,
        data: [{
          _id: 10,
          certified: "URL FILE"
        }]
      }]
    }, {
      _id: 11,
      learn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }, {
      _id: 12,
      dependentForm: 1,
      data: [{
        _id: 13,
        name: "Lorem ipsum"
      }, {
        _id: 14,
        course: [{
          value: 0
        }, {
          value: 2
        }]
      }]
    }]
  }]
}

let application = {
  _id: 0,
  sections: [
    {
      _id: 0,
      fields: {
        name: {
          _id: 0,
          value: "André Camargo"
        },
        city: {
          _id: 1,
          value: "Londrina"
        },
        state: {
          _id: 2,
          value: "Paraná"
        },
        zipCode: {
          _id: 3,
          value: "86086480"
        },
        gender: {
          _id: 4,
          value: "Male"
        }, visa: {
          _id: 5,
          value: "Yes",
          data: {
            type: {
              _id: 6,
              value: "M-1"
            }
          }
        }
      }
    },
    {
      _id: 1,
      fields: {
        term: {
          _id: 7,
          value: [{
            value: "Summer"
          }, {
            value: "Fall",
            data: {
              season: {
                _id: 8,
                value: "October through December"
              }
            }
          }]
        }, course: {
          _id: 9,
          value: [{
            value: "Intensive English"
          }, {
            value: "Graduate Student",
            data: {
              certified: {
                _id: 10,
                value: "URL FILE"
              }
            }
          }]
        }, learn: {
          _id: 11,
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        }, dependentForm: {
          _id: 12,
          value: "Yes",
          data: {
            name: {
              _id: 13,
              value: "Lorem ipsum"
            }, course: {
              _id: 14,
              value: [{
                value: "Intensive English"
              }, {
                value: "Undergraduate Student"
              }]
            }
          }
        }
      }
    }
  ]
}


form.sections.forEach(section => {
  console.log(`\n${section.label}`)
  section.fields.forEach(field => {
    viewFields(field, application.sections[section._id].fields, "")
  });
});

function viewFields(field, fieldsValue, tab) {
  if (Array.isArray(fieldsValue[field._id].value)) {
    console.log(`${tab}${field.label}`)
    fieldsValue[field._id].value.forEach(v => {
      console.log(`\t${tab}${v.value}`)
      field.options.forEach(op => {
        if (v.value == op.value) {
          if (op.fields) {
            // console.log(`-----> ${v.value}:`)
            op.fields.forEach(f => {
              viewFields(f, v.data, tab + "\t\t")
            });
          }
        }
      })
    });
  }
  else {
    console.log(`${tab}${field.label} ${fieldsValue[field._id].value}`)
  }
  if (fieldsValue[field._id].data) {
    field.options.forEach(op => {
      if (op.fields) {
        op.fields.forEach(f => {
          viewFields(f, fieldsValue[field._id].data, tab + "\t")
        });
      }
    })
  }
}
