import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function swal() {
  return withReactContent(Swal);
}
