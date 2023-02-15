
Nova.booting((Vue) => {
    // Re-use old components but we extend the form field
    Vue.component('IndexBelongsToDependency', require("./components/IndexBelongsToField.vue").default);
    Vue.component('DetailBelongsToDependency', require("./components/DetailBelongsToField.vue").default);
    Vue.component('FormBelongsToDependency', require("./components/FormField.vue").default);
});
