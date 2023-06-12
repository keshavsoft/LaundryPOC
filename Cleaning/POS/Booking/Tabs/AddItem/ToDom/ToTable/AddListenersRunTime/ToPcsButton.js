import { StartFunc as StartFuncChangePcs } from "../../../LocalStorageFunc/ItemsInOrder/ChangePcs.js";
import { StartFunc as StartFuncToOrderItems } from "../ToOrderItems.js";

let StartFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalitemserial = jVarLocalCurrentTarget.dataset.itemserial;

    jFLocalSwal({
        inItemSerial: jVarLocalitemserial,
        inPcs: jVarLocalCurrentTarget.value
    });
};


// Swal.fire({
//     title: 'Submit your Github username',
//     input: 'text',
//     inputAttributes: {
//       autocapitalize: 'off'
//     },
//     showCancelButton: true,
//     confirmButtonText: 'Look up',
//     showLoaderOnConfirm: true,
//     preConfirm: (login) => {
//       return fetch(`//api.github.com/users/${login}`)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(response.statusText)
//           }
//           return response.json()
//         })
//         .catch(error => {
//           Swal.showValidationMessage(
//             `Request failed: ${error}`
//           )
//         })
//     },
//     allowOutsideClick: () => !Swal.isLoading()
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: `${result.value.login}'s avatar`,
//         imageUrl: result.value.avatar_url
//       })
//     }
//   })


const jFLocalSwal = ({ inItemSerial, inPcs }) => {
    Swal.fire({
        title: `${inItemSerial} : Change Pcs`,
        input: 'number',
        inputAttributes: {
        },
        inputValue: inPcs,
        showCancelButton: true,
        confirmButtonText: 'Save Pcs',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            let jVarLocalFromChange = StartFuncChangePcs({ inKey: inItemSerial, inPcs: parseInt(result.value) });

            if (jVarLocalFromChange) {
                StartFuncToOrderItems();
            };
        }
    });
};


const jFLocalSwal2 = ({ inItemSerial, inPcs }) => {
    Swal.fire({
        title: 'Enter Date: ',
        html: `<input type="number" id="Numbersweet" class="swal2-input" placeholder=" Enter Pcs." value=${inPcs} autofocus> `,
        confirmButtonText: 'Pcs',
        focusConfirm: true,
        preConfirm: () => {
            const PcsValue = Swal.getPopup().querySelector('#Numbersweet').value;
            return parseInt(PcsValue);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let jVarLocalFromChange = StartFuncChangePcs({ inKey: inItemSerial, inPcs: result.value });

            if (jVarLocalFromChange) {
                StartFuncToOrderItems();
            };
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    });
};

const jFLocalSwal1 = ({ inItemSerial, inPcs }) => {
    const inputValue = 16
    const inputStep = 1

    Swal.fire({
        confirmButtonText: 'Save',
        title: 'Change Pcs',
        html: `
    <input
      type="number"
      value="${inPcs}"
      step="${inputStep}"
      class="swal2-input"
      id="range-value">`,
        input: 'range',
        inputValue,
        inputAttributes: {
            min: 0,
            max: 1000,
            step: inputStep
        },
        didOpen: () => {
            // const inputRange = Swal.getInput()
            // const inputNumber = Swal.getHtmlContainer().querySelector('#range-value')

            // // remove default output
            // inputRange.nextElementSibling.style.display = 'none'
            // inputRange.style.width = '100%'

            // // sync input[type=number] with input[type=range]
            // inputRange.addEventListener('input', () => {
            //     inputNumber.value = inputRange.value
            // })

            // // sync input[type=range] with input[type=number]
            // inputNumber.addEventListener('change', () => {
            //     inputRange.value = inputNumber.value
            // })
        }
    }).then((result) => {
        console.log("sssssssssss : ", result, inItemSerial);
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            StartFuncChangePcs({ inKey: inItemSerial, inPcs: result.value });
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    });
};

export { StartFunc };