let application = {
  _id: 0,
  sections: [{
    _id: 0,
    data: [{
      _id: 0,
      fieldId: "name",
      value: "André Camargo"
    }, {
      _id: 1,
      fieldId: "city",
      value: "Londrina"
    }, {
      _id: 2,
      fieldId: "state",
      value: "Paraná"
    }, {
      _id: 3,
      fieldId: "zipCode",
      value: "86083480"
    }, {
      _id: 4,
      fieldId: "gender",
      value: "Male"
    }, {
      _id: 5,
      fieldId: "visa",
      value: 1,
      data: [{
        _id: 6,
        fieldId: "type",
        value: "M-1"
      }]
    }]
  }, {
    _id: 1,
    data: [{
      _id: 7,
      fieldId: "term",
      value: [{
        value: 0,
      }, {
        value: 1,
        data: [{
          _id: 8,
          fieldId: "season",
          value: 0
        }]
      }]
    }, {
      _id: 9,
      fieldId: "course",
      value: [{
        value: 1
      }, {
        value: 2,
        data: [{
          _id: 10,
          fieldId: "certified",
          value: "FILE"
        }]
      }]
    }, {
      _id: 11,
      fieldId: "learn",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }, {
      _id: 12,
      fieldId: "dependentForm",
      value: 1,
      data: [{
        _id: 13,
        fieldId: "name",
        value: "Lorem ipsum dolor"
      }, {
        _id: 14,
        fieldId: "course",
        value: [{
          value: 0
        }, {
          value: 3
        }]
      }]
    }]
  }]
}

let application2 = {
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

console.log(application)

console.log(application2)