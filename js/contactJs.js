'use strict';

$(document).ready(function() {

  //Set Validation rules for the form
  $("form[name='contact']").validate({

    rules: {
    firstName: "required",
    lastName: "required",
    email: {
      required: true,
      email: true,
    },
  },
    messages: {
    firstName: "Please Enter Your First Name.",
    lastName: "Please Enter Your Last Name.",
    email: "Please Enter A Valid Email.",
  },
  submitHandler: function(form) {
      form.submit();
    }
  });
};
