<template>
  <div v-if="isAdding">
    <rule-add
      :rules="rules"
      @ruleadded="onRuleAdded"
      @addcancelled="onAddCancelled"
    ></rule-add>
  </div>
  <div v-else-if="isEditing">isEditing</div>
  <div v-else>
    <div v-if="isSelected">
      <span id="selectedRule" @click="onSelect(selectedRule)">{{
        selectedRule.filled
          ? selectedRule.filled.left + "&rarr;" + selectedRule.filled.right
          : selectedRule.left + "&rarr;" + selectedRule.right
      }}</span>
    </div>
    <div class="scrolldown" v-else>
      <span>click a rule to select / Add to create / Edit to change</span>
      <span
        v-for="(optRule, index) in rules"
        :key="index"
        :id="'rule_' + index"
        @click="onSelect(optRule)"
        >{{
          optRule.filled
            ? optRule.filled.left + "&rarr;" + optRule.filled.right
            : optRule.left + "&rarr;" + optRule.right
        }}</span
      >
    </div>
    <div v-for="(varName, index) in selectedRule.vars" :key="index">
      <rule-var-edit
        v-if="isSelected && selectedRule.vars && selectedRule.vars.length > 0"
        :varName="varName"
        :varValue="selectedRule[varName] ? selectedRule[varName] : ''"
        @varedited="onVarEdited"
      ></rule-var-edit>
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="onCancel">Cancel</button>
      <button type="button" class="btn btn__primary" @click="isAdding = true">
        Add
      </button>
      <button type="button" class="btn btn__primary">Edit</button>
      <button type="button" class="btn btn__primary" @click="onSave">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import RuleVarEditVue from "./RuleVarEdit.vue";
import RuleAddVue from "./RuleAdd.vue";
import rulesJSON from "/rules.json";
import { initRules, fillRule, mqifyRules } from "../libs/rule.js";
export default {
  components: {
    RuleVarEdit: RuleVarEditVue,
    RuleAdd: RuleAddVue,
  },
  emits: ["editcancelled", "itemedited"],
  props: {
    rule: { type: Object, required: true },
    id: { type: String, required: true },
  },
  data() {
    return {
      selectedRule: this.rule,
      rules: initRules(this.rule, rulesJSON),
      hasChanged: false,
      isSelected: false,
      // isSelecting: true,
      isAdding: false,
      isEditing: false,
    };
  },
  methods: {
    onVarEdited(varName, varValue) {
      //console.log("onVarEdited: ", varName, ":", varValue);
      this.selectedRule[varName] = varValue;
      // console.log("onVarEdited: ", this.selectedRule);
      this.hasChanged = true;
    },
    onRuleAdded(enlargedRules) {
      this.rules = enlargedRules;
      this.isAdding = false;
    },
    onAddCancelled() {
      this.isAdding = false;
    },
    onSelect(selRule) {
      if (this.isSelected) {
        this.isSelected = false;
      } else {
        // copy selected rule
        this.selectedRule = JSON.parse(JSON.stringify(selRule));
        this.isSelected = true;
        this.hasChanged = true;
      }
    },
    onSave() {
      if (!this.selectedRule.vars) return;
      this.selectedRule = fillRule(this.selectedRule);
      console.log("onSave", this.selectedRule);
      // console.log("onSave: hasChanged", this.hasChanged);
      if (this.hasChanged) {
        this.hasChanged = false;
        this.$emit("itemedited", this.selectedRule);
        this.gFocusMQobj.clear();
        this.gFocusMQref.value = {};
      }
    },
    onCancel() {
      this.$emit("editcancelled");
      this.gFocusMQobj.clear();
      this.gFocusMQref.value = {};
    },
  },
  mounted: function () {
    mqifyRules(this.rules, this.isSelected);
  },
  updated: function () {
    mqifyRules(this.rules, this.isSelected);
  },
};
</script>

<style scoped>
.edit-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
input,
select {
  margin-top: 0.4rem;
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
option {
  display: block;
  text-align: right;
}
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
form > * {
  flex: 0 0 100%;
}
/* ***select style*** */
.scrolldown {
  display: block;
  width: 100%;
  height: 100px;
  border-spacing: 0;
  border: 1px solid black;
  /* Set vertical scroll */
  overflow-y: auto;
  /* Hide the horizontal scroll */
  overflow-x: hidden;
  text-align: left;
}
.scrolldown span {
  display: block;
  width: 100%;
  border-bottom: 1px solid black;
}
</style>