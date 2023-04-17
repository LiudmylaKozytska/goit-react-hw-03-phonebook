import Swal from 'sweetalert2';

export const alertContactInclude = name => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${name} is already in contacts`,
  });
};

export const alertAddContactSuccess = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your contact has been saved',
    showConfirmButton: false,
    timer: 1500,
  });
};

// export const alertConfirmDelete = () => {
//   const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: 'btn btn-success',
//       cancelButton: 'btn btn-danger',
//     },
//     buttonsStyling: false,
//   });

//   swalWithBootstrapButtons
//     .fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, cancel!',
//       reverseButtons: true,
//       confirmButtonClass: 'btn btn-primary',
//       cancelButtonClass: 'btn btn-secondary',
//     })
//     .then(result => {
//       if (result.isConfirmed) {
//         swalWithBootstrapButtons.fire(
//           'Deleted!',
//           'Your contact has been deleted.',
//           'success'
//         );
//       } else if (
//         /* Read more about handling dismissals below */
//         result.dismiss === Swal.DismissReason.cancel
//       ) {
//         swalWithBootstrapButtons.fire(
//           'Cancelled',
//           'Your contact file is safe :)',
//           'error'
//         );
//       }
//     });
// };
