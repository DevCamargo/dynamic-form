<template>
  <div class="form">
    <div class="form-name">{{form.label}}</div>
    <div class="section" v-for="(section, index) in form.sections" :key="index">
      <div class="section-name">{{section.label}}</div>
      <Field v-for="(field, index) in section.fields" :key="index" :field="field" @value="v => value(v, field.fieldKey, section.sectionKey)" />
    </div>
    <button @click="$emit('send')">Send info (view console)</button>
  </div>
</template>
<script>
import Field from "@/components/Field.vue";

export default {
  name: "Form",
  components: {
    Field
  },
  props: {
    form: Object
  },
  methods: {
    value(value, field, section) {
      this.$emit('value', value, field, section)
      // console.log();
    }
  }
};
</script>
<style lang="scss" scoped>
.form {
  background-color: #fafafa;
  padding: 15px;
  .form-name {
    font-size: 22px;
    font-weight: bold;
  }
  .section {
    text-align: left;
    margin-top: 15px;
    .section-name {
      font-size: 18px;
      margin-bottom: 15px;
    }
  }
}
</style>