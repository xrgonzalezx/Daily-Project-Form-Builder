// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
// Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );

  let inputEle = document.createElement("input")
  inputEle.type = first.type
  inputEle.placeholder = first.label
  fields.appendChild(inputEle);

} )();


// -------- Your Code Goes Below this Line --------

( function(){
  let last = formData[ 1 ];
  console.log( last );
  console.log( last.label );
} )();

( function(){
  let email = formData[ 2 ];
  console.log( email );
  console.log( email.label );
} )();

( function(){
  let userwebsite = formData[ 3 ];
  console.log( userwebsite );
  console.log( userwebsite.label );
} )();

( function(){
  let userlan = formData[ 4 ];
  console.log( userlan );
  console.log( userlan.label );
} )();

( function(){
  let usercomment = formData[ 5 ];
  console.log( usercomment );
  console.log( usercomment.label );
} )();

( function(){
  let usermobile = formData[ 6 ];
  console.log( usermobile );
  console.log( usermobile.label );
} )();

( function(){
  let userphone = formData[ 7 ];
  console.log( userphone );
  console.log( userphone.label );
} )();
