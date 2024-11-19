
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);


 export const showPopupCorrect = (arg1, arg2, arg3, arg4) => {
  MySwal.fire({
   title: arg1,
   text: arg2,
   icon: arg3,
   confirmButtonText: arg4,
   backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `,
   showClass: {
    popup: "animate__animated animate__fadeInDown",
   },
   hideClass: {
    popup: "animate__animated animate__fadeOutUp",
   },
  });
 };


