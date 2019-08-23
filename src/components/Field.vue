<template>
  <div class="field" :style="{ width: /*field.size ? `${field.size}%` :*/ '100%'  }">
    <div class="label" v-if="field.label && field.type != 'file'">{{field.label}}</div>
    <div>
      <div class="label" v-if="field.type == 'text'">{{field.text}}</div>
      <input
        @change="select()"
        :disabled="disabled"
        v-else-if="field.type == 'input'"
        class="full"
        :type="field.type"
        v-model="value"
      />
      <select
        @change="select()"
        :disabled="disabled"
        class="full"
        v-else-if="field.type == 'select'"
        v-model="value"
      >
        <option
          v-for="(option, index) in field.options"
          :key="index"
          :value="option.value"
        >{{option.label}}</option>
      </select>
      <div v-else-if="field.type == 'radio'">
        <div v-for="(option, index) in field.options" :key="index">
          <input
            v-model="value"
            :disabled="disabled"
            type="radio"
            :ref="`${id}-${field.id}-${option.value}`"
            :id="`${id}-${field.id}-${option.value}`"
            :name="field.id"
            :value="option.value"
            @change="select()"
          />
          <label :for="`${id}-${field.id}-${option.value}`">{{option.label}}</label>
          <div v-if="option.fields">
            <Field
              v-for="(theField, index) in option.fields"
              :key="index"
              :field="theField"
              :disabled="value != option.value"
              @value="concat"
              @addValue="addValue"
            />
          </div>
        </div>
      </div>
      <div v-else-if="field.type == 'checkbox'">
        <div v-for="(option, index) in field.options" :key="index">
          <input
            v-model="value"
            :disabled="disabled"
            type="checkbox"
            :ref="`${id}-${field.id}-${option.value}`"
            :id="`${id}-${field.id}-${option.value}`"
            :name="field.id"
            :value="option.value"
            @change="selectCheckbox()"
          />
          <label :for="`${id}-${field.id}-${option.value}`">{{option.label}}</label>
          <div v-if="option.fields">
            <Field
              v-for="(theField, index) in option.fields"
              :key="index"
              :field="theField"
              :disabled="value.filter(op => op == option.value).length == 0"
              @value="concat"
              @addValue="addValue"
            />
          </div>
        </div>
      </div>
      <div v-else-if="field.type == 'file'">
        <input
          :disabled="disabled"
          type="file"
          :name="field.id"
          :accept="field.attributes.accept"
          :multiple="field.attributes.multiple"
        />
      </div>
      <div v-else-if="field.type == 'textarea'">
        <textarea
          @change="select()"
          :disabled="disabled"
          class="full"
          v-model="value"
          rows="5"
          cols="50"
        ></textarea>
      </div>
      <div v-else-if="field.type == 'form'">
        <Field
          v-for="(theField, index) in field.fields"
          :key="index"
          :field="theField"
          @value="concat"
          @addValue="addValue"
        />
      </div>
      <div v-else-if="field.type == 'question'">
        <div v-for="(option, index) in field.options" :key="index">
          <input
            v-model="value"
            :disabled="disabled"
            type="radio"
            :ref="`${id}-${field.id}-${option.value}`"
            :id="`${id}-${field.id}-${option.value}`"
            :name="field.id"
            :value="option.value"
            @change="select()"
          />
          <label :for="`${id}-${field.id}-${option.value}`">{{option.label}}</label>
        </div>
        <div v-for="(option, index) in field.options" :key="`${id}-${field.id}-${index}`">
          <div v-if="value == option.value">
            <Field
              v-for="(theField, index) in option.fields"
              :key="index"
              :field="theField"
              :disabled="value != option.value"
              @value="concat"
              @addValue="addValue"
            />
          </div>
        </div>
      </div>
      <div v-if="field.fields">
        <Field
          v-for="(theField, index) in field.fields"
          :key="index"
          :field="theField"
          @value="concat"
          @addValue="addValue"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Field",
  props: {
    field: Object,
    disabled: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      value: null,
      id: null
    };
  },
  methods: {
    select() {
      console.log({
        data: {
          fieldId: this.field.id,
          value: this.value
        }
      });
      // this.$emit("value", {
      //   data: {
      //     fieldId: this.field.id,
      //     value: this.value
      //   }
      // });
    },
    selectCheckbox(option) {
      // let values = []
      // this.value.forEach(v => {
      //   values.push({
      //     value: v
      //   })
      // });
      console.log(this.value)
      // console.log({
      //   data: {
      //     fieldId: this.field.id,
      //     value: values
      //   }
      // });
      // this.$emit("addValue", {
      //   data: {
      //     fieldId: this.field.id,
      //     value: values
      //   }
      // });
    },
    addValue(value) {
      console.log({
        data: {
          fieldId: this.field.id,
          value: this.value,
          data: value.data
        }
      });
      this.$emit("value", {
        data: {
          fieldId: this.field.id,
          value: this.value,
          data: value.data
        }
      });
    },
    concat(value) {
      console.log({
        data: {
          fieldId: this.field.id,
          value: this.value,
          data: value.data
        }
      });
      this.$emit("value", {
        data: {
          fieldId: this.field.id,
          value: this.value,
          data: value.data
        }
      });
      // let response = JSON.parse(
      //   `{"${this.field.id}": { "value": "${this.value}"}}`
      // );
      // response[this.field.id][Object.keys(value)] = value[Object.keys(value)];
      // console.log(response);
      // console.log(value);
    }
  },
  mounted() {
    this.id = this._uid;
  },
  created() {
    if (this.field.type == "radio" || this.field.type == "checkbox") {
      this.value = [];
    }
  }
};
</script>
<style lang="scss" scoped>
.field {
  margin-bottom: 15px;
  .label {
    font-size: 14px;
  }
  .full {
    width: 100%;
  }
}
</style>