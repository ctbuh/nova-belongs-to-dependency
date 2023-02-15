import IndexBelongsToDependency from './components/IndexBelongsToField'
import DetailBelongsToDependency from './components/DetailBelongsToField'
import FormBelongsToDependency from './components/FormField'

Nova.booting((Vue) => {
    // Re-use old components but we extend the form field
    Vue.component('IndexBelongsToDependency', IndexBelongsToDependency);
    Vue.component('DetailBelongsToDependency', DetailBelongsToDependency);
    Vue.component('FormBelongsToDependency', FormBelongsToDependency);
});
