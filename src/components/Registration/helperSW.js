// import $ from 'jquery';

// // var confirm = false;

// $(function () {
//   var current_fs, next_fs, previous_fs; //fieldsets
//   var opacity;
//   var current = 1;
//   var steps = $('.fieldset').length;
//   console.log(steps, 'steps');

//   setProgressBar(current);

//   console.log(current, 'current');

//   $('.next').on('click', function () {
//     current_fs = $(this).parent();
//     next_fs = $(this).parent().next();
//     console.log('object');

//     //Add Class Active
//     $('#progressbar li').eq($('.fieldset').index(next_fs)).addClass('active');

//     //show the next fieldset
//     next_fs.show();
//     //hide the current fieldset with style
//     current_fs.animate(
//       {
//         opacity: 0,
//       },
//       {
//         step: function (now) {
//           // for making fielset appear animation
//           opacity = 1 - now;

//           current_fs.css({
//             display: 'none',
//             position: 'relative',
//           });
//           next_fs.css({
//             opacity: opacity,
//           });
//         },
//         duration: 500,
//       },
//     );
//     setProgressBar(++current);
//   });

//   $('.previous').on('click', function () {
//     current_fs = $(this).parent();
//     previous_fs = $(this).parent().prev();

//     //Remove class active
//     $('#progressbar li')
//       .eq($('fieldset').index(current_fs))
//       .removeClass('active');

//     //show the previous fieldset
//     previous_fs.show();

//     //hide the current fieldset with style
//     current_fs.animate(
//       {
//         opacity: 0,
//       },
//       {
//         step: function (now) {
//           // for making fielset appear animation
//           opacity = 1 - now;

//           current_fs.css({
//             display: 'none',
//             position: 'relative',
//           });
//           previous_fs.css({
//             opacity: opacity,
//           });
//         },
//         duration: 500,
//       },
//     );
//     setProgressBar(--current);
//   });

//   function setProgressBar(curStep) {
//     var percent = parseFloat(100 / steps) * curStep;
//     percent = percent.toFixed();
//     $('.progress-bar').css('width', percent + '%');
//   }
// });

// $('.submit').trigger(function () {});

// // Add item
// // const addItem = e => {
// //   e.preventDefault();

// //   // Get input value
// //   var newItem = document.getElementById('item').value;

// //   // Create new li element
// //   const li = document.createElement('li');
// //   // Add class
// //   li.className = 'list-group-item';
// //   // Add text node with input value
// //   li.appendChild(document.createTextNode(newItem));

// //   // Create del button element
// //   const deleteBtn = document.createElement('button');

// //   // Create project button element
// //   const projectBtn = document.createElement('button');

// //   // Add classes to del button
// //   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// //   // Add classes to project button
// //   projectBtn.className = 'btn btn-primary btn-sm float-right project mr-3';

// //   projectBtn.setAttribute('data-toggle', 'modal');
// //   projectBtn.setAttribute('data-target', '#exampleModal');

// //   // Append text node
// //   deleteBtn.appendChild(document.createTextNode('X'));

// //   // Append text node
// //   projectBtn.appendChild(document.createTextNode('Add Project'));

// //   // Append button to li
// //   li.appendChild(deleteBtn);

// //   // Append button to li
// //   li.appendChild(projectBtn);

// //   // Append li to list
// //   itemList.appendChild(li);
// // };

// // // Remove item
// // function removeItem(e) {
// //   if (e.target.classList.contains('delete')) {
// //     console.log(confirm, 'confirm');
// //     // if (confirm) {
// //     //   const li = e.target.parentElement;
// //     //   itemList.removeChild(li);
// //     // }
// //   }
// // }

// // // Add project

// // const form = document.getElementById('addForm');
// // const itemList = document.getElementById('items');
// // // var itemList = document.getElementById('items2');

// // // Form submit event
// // form.addEventListener('submit', addItem);
// // // Delete event
// // itemList.addEventListener('click', removeItem);
// // // Filter event
// // // filter.addEventListener('keyup', filterItems);
// // console.log(addItem, 'addItem');
