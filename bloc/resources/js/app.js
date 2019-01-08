
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./jquery.js');
require('./bootstrap.js');
require('./toastr.js');




window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


Vue.component('pensamiento-component', require('./components/PensamientoComponent.vue').default);





/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
    el: '#app',
    data: {
      keeps:[],
      newKeep: '',
      errors: []
    },
    created: function(){
      this.getKeeps();
    },
    methods: {

      getKeeps: function(){
        var url='task';
        axios.get(url).then(response=>{
          this.keeps = response.data;
          toastr.success('Hola');

        })
      },
      deleteKeeps: function(keep){ 
        var url = 'task/' + keep.id;
        axios.delete(url).then(response=>{
          this.getKeeps();
          toastr.success('Hola');
        })
      },
      createKeep: function(){
        var url = 'task';
        axios.post(url, {
          keep: this.newKeep
        })
        .then(response =>{
          this.getKeeps();
          this.newKeep = '';
          $('#create').modal('hide');
        }).catch(error => {
          this.errors = error.response.data;
        })
      }
    }
  })
