// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// select2
import $ from 'jquery'
import 'select2'
import 'select2/dist/css/select2.css'

window.$ = $

document.addEventListener('turbolinks:load', function(){
  $("[name='product[currency]']").select2();
  $("[name='product[tag_list][]']").select2({
    multiple: true,
    tags: true
  });
})

// sweetalert2
import Swal from 'sweetalert2'

document.addEventListener('turbolinks:load', function(){
  document.querySelector('.actions input').addEventListener('click', function(e){
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "Create new product",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          showConfirmButton: false,
          title: 'Loading...'
        })
        document.querySelector('form').submit()
      }
    })
  })
})

// tempusdominus-bootstrap-4
import 'tempusdominus-bootstrap-4'
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css'
import 'font-awesome/css/font-awesome.css'

document.addEventListener('turbolinks:load', function(){
  $('#datetimepicker1').datetimepicker();
})
