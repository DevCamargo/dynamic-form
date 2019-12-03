let form = {
  label: 'Application for San Diego State University',
  sections: [{
    sectionKey: 'personal_information',
    label: 'PERSONAL INFORMATION',
    fields: [{
      fieldKey: 'name',
      label: 'Name:',
      type: 'input',
    }, {
      fieldKey: 'city',
      label: 'City:',
      type: 'input',
    }, {
      fieldKey: 'state',
      label: 'State:',
      type: 'input',
    }, {
      fieldKey: 'zipCode',
      label: 'Zip code:',
      type: 'input',
    }, {
      fieldKey: 'gender',
      label: 'Gender:',
      type: 'select',
      options: [{
        value: 'Male',
        label: 'Male'
      }, {
        value: 'Female',
        label: 'Female'
      }]
    }, {
      fieldKey: 'visa',
      label:
        'Do you have a non-immigrant visa to the U.S. currently?',
      type: 'radio',
      options: [{
        value: 'Yes',
        label: 'Yes',
        fields: [{
          fieldKey: 'type',
          label: 'Type:',
          type: 'select',
          options: [{
            value: 'M-1',
            label: 'M-1'
          }, {
            value: 'F-1',
            label: 'F-1'
          }]
        }]
      }, {
        value: 'No',
        label: 'No'
      }]
    }]
  }, {
    label: 'EDUCATIONAL INFORMATION',
    sectionKey: 'educational_information',
    fields: [{
      fieldKey: 'term',
      label: 'Term you expect to enter <INSTITUTION NAME>',
      type: 'checkbox',
      options: [{
        value: 'Summer',
        label: 'Summer (May through August)'
      }, {
        value: 'Fall',
        label: 'Fall (August through December)',
        fields: [{
          fieldKey: 'season',
          label: 'Season:',
          type: 'select',
          options: [{
            value: 'August through September',
            label: 'August through September'
          }, {
            value: 'October through December',
            label: 'October through December'
          }]
        }]
      }]
    }, {
      fieldKey: 'course',
      label: 'Type of course:',
      type: 'checkbox',
      options: [{
        value: 'Intensive English',
        label: 'Intensive English'
      }, {
        value: 'Undergraduate Student',
        label: 'Undergraduate Student'
      }, {
        value: 'Graduate Student',
        label: 'Graduate Student',
        fields: [{
          fieldKey: 'certified',
          label: 'Attach Certified',
          type: 'file'
        }]
      }]
    }, {
      fieldKey: 'learn',
      label: 'Please tell us how you first learned about San Diego State University:',
      type: 'textarea'
    }]
  }, {
    label: 'DEPENDENT INFORMATION FORM',
    sectionKey: 'dependent_information',
    fields: [{
      fieldKey: 'dependentForm',
      label: 'Will you be accompanied by your spouse?',
      type: 'question',
      options: [{
        value: 'Yes',
        label: 'Yes',
        fields: [{
          fieldKey: 'name',
          label: 'Name:',
          type: 'input',
        }, {
          fieldKey: 'course',
          label: 'Type of course',
          type: 'checkbox',
          options: [{
            value: 'Intensive English',
            label: 'Intensive English'
          }, {
            value: 'Undergraduate Student',
            label: 'Undergraduate Student'
          }, {
            value: 'Graduate Student',
            label: 'Graduate Student'
          }]
        }]
      }, {
        value: 'No',
        label: 'No'
      }]
    }]
  }]
}

let exempleForm = {
  sections: [{
    sectionKey: 'personal_information',
    fields: [{
      fieldKey: 'name',
      label: 'Name:',
      type: 'input',
    }, {
      fieldKey: 'gender',
      label: 'Gender:',
      type: 'select',
      options: [{
        value: 'male',
        label: 'Male'
      }, {
        value: 'female',
        label: 'Female'
      }]
    }]
  }]
}

let exempleApplication = {
  sections: {
    personal_information: {
      fields: {
        name: {
          value: 'Nicolas Cage'
        },
        gender: {
          value: 'male'
        }
      }
    }
  }
}
let applicationS = JSON.parse('{"sections":{"personal_information":{"fields":{"name":{"value":"André Camargo"},"city":{"value":"Londrina"},"state":{"value":"PR"},"zipCode":{"value":"86083480"},"gender":{"value":"Male"},"visa":{"value":"Yes"}}},"educational_information":{"fields":{"term":{"value":[{"value":"Summer","data":{"season":{"value":"October through December"}}},{"value":"Fall","data":{"season":{"value":"August through September"}}}]},"course":{"value":[{"value":"Intensive English"},{"value":"Undergraduate Student"}]},"learn":{"value":"Lalalalalalala"}}},"dependent_information":{"fields":{"dependentForm":{}}}}}')

let application = {
  sections: {
    personal_information: {
      fields: {
        name: {
          value: 'Nicolas Cage'
        },
        city: {
          value: 'Londrina'
        },
        state: {
          value: 'Paraná'
        },
        zipCode: {
          value: '86020400'
        },
        gender: {
          value: 'Male'
        }, visa: {
          value: 'Yes',
          data: {
            type: {
              value: 'M-1'
            }
          }
        }
      }
    },
    educational_information: {
      fields: {
        term: {
          value: [{
            value: 'Summer'
          }, {
            value: 'Fall',
            data: {
              season: {
                value: 'October through December'
              }
            }
          }]
        }, course: {
          value: [{
            value: 'Intensive English'
          }, {
            value: 'Graduate Student',
            data: {
              certified: {
                value: 'URL FILE'
              }
            }
          }]
        }, learn: {
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        }
      }
    },
    dependent_information: {
      fields: {
        dependentForm: {
          value: 'Yes',
          data: {
            name: {
              value: 'Lorem ipsum'
            }, course: {
              value: [{
                value: 'Intensive English'
              }, {
                value: 'Undergraduate Student'
              }]
            }
          }
        }
      }
    }
  }
}


form.sections.forEach(section => {
  console.log(`\n${section.label}`)
  section.fields.forEach(field => {
    viewFields(field, applicationS.sections[section.sectionKey].fields, '')
  });
});

function viewFields(field, fieldsValue, tab) {
  if (Array.isArray(fieldsValue[field.fieldKey].value)) {
    console.log(`${tab}${field.label}`)
    fieldsValue[field.fieldKey].value.forEach(v => {
      console.log(`\t${tab}${v.value}`)
      field.options.forEach(op => {
        if (v.value == op.value) {
          if (op.fields) {
            op.fields.forEach(f => {
              viewFields(f, v.data, tab + '\t\t')
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
          viewFields(f, fieldsValue[field.fieldKey].data, tab + '\t')
        });
      }
    })
  }
}
