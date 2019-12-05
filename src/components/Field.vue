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
            :ref="`${id}-${field.key}-${option.value}`"
            :id="`${id}-${field.key}-${option.value}`"
            :name="field.key"
            :value="option.value"
            @change="select()"
          />
          <label :for="`${id}-${field.key}-${option.value}`">{{option.label}}</label>
          <div v-if="option.fields">
            <Field
              v-for="(theField, index) in option.fields"
              :key="index"
              :field="theField"
              :disabled="value != option.value"
              @value="concat"
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
            :ref="`${id}-${field.key}-${option.value}`"
            :id="`${id}-${field.key}-${option.value}`"
            :name="field.key"
            :value="option.value"
            @change="v => selectCheckbox(v.target.value,v.target.checked)"
          />
          <label :for="`${id}-${field.key}-${option.value}`">{{option.label}}</label>
          <div v-if="option.fields">
            <Field
              v-for="(theField, index) in option.fields"
              :key="index"
              :field="theField"
              :disabled="value.filter(op => op == option.value).length == 0"
              :father="value.filter(op => op == option.value)[0]"
              @value="concat"
            />
          </div>
        </div>
      </div>
      <div v-else-if="field.type == 'file'">
        <input
          :disabled="disabled"
          type="file"
          :name="field.key"
          :accept="field.attributes.accept ? field.attributes.accept : 'all'"
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
        />
      </div>
      <div v-else-if="field.type == 'question'">
        <div v-for="(option, index) in field.options" :key="index">
          <input
            v-model="value"
            :disabled="disabled"
            type="radio"
            :ref="`${id}-${field.key}-${option.value}`"
            :id="`${id}-${field.key}-${option.value}`"
            :name="field.key"
            :value="option.value"
            @change="select()"
          />
          <label :for="`${id}-${field.key}-${option.value}`">{{option.label}}</label>
        </div>
        <div v-for="(option, index) in field.options" :key="`${id}-${field.key}-${index}`">
          <div v-if="value == option.value">
            <Field
              v-for="(theField, index) in option.fields"
              :key="index"
              :field="theField"
              :disabled="value != option.value"
              @value="concat"
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
    },
    father: undefined
  },
  data() {
    return {
      value: null,
      id: null,
      arrayValue: []
    };
  },
  methods: {
    select() {
      this.$emit(
        "value",
        JSON.parse(
          `{ "${this.field.key}": { "value": "${this.value}" } }`
        ),
        this.father
      );
    },
    selectCheckbox(option, value) {
      if (value) {
        this.arrayValue.push({
          value: option
        })
      }
      else {
        this.arrayValue = this.arrayValue.filter(ar => ar.value != option);
      }
      this.$emit(
        "value",
        JSON.parse(
          `{ "${this.field.key}": { "value": ${JSON.stringify(
            this.arrayValue
          )} } }`
        ),
        this.father
      );
    },
    concat(value, father) {
      console.log(this.value, value);
      
      if (Array.isArray(this.value)) {
        if (father) {
          if (this.arrayValue.filter(va => va.value == father).length == 0) {
            this.arrayValue.push({
              value: father,
              data: value
            });
          } else {
            this.arrayValue.forEach((va, i) => {
              if (va.value == father) {
                this.arrayValue[i] = {
                  value: father,
                  data: value
                };
              }
            });
          }
          this.$emit(
            "value",
            JSON.parse(`{
            "${this.field.key}": {
              "value": ${JSON.stringify(this.arrayValue)}
            }
          }`)
          );
        } else {          
          if (this.arrayValue.filter(va => va.value == value).length == 0) {
            this.arrayValue.push({
              value: value
            });
          } else {
            this.arrayValue.forEach((va, i) => {
              if (va.value == value) {
                this.arrayValue[i] = {
                  value: value
                };
              }
            });
          }
          this.$emit(
            "value",
            JSON.parse(`{
          "${this.field.key}": {
            "value": "${this.value}",
            "data": ${JSON.stringify(this.arrayValue)}
          }
        }`)
          );
        }
      } else {
        // console.log(JSON.parse(`{
        //   "${this.field.key}": {
        //     "value": "${this.value}",
        //     "data": ${JSON.stringify(value)}
        //   }
        // }`));
        
        this.$emit(
          "value",
          JSON.parse(`{
          "${this.field.key}": {
            "value": "${this.value}",
            "data": ${JSON.stringify(value)}
          }
        }`)
        );
      }
    }
  },
  mounted() {
    this.id = this._uid;
  },
  created() {
    if (this.field.type == "checkbox") {
      this.value = [];
    }
    if (this.field.value) {
      this.value = this.field.value
      this.select()
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