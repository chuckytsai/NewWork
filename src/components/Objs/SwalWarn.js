import Swal from "sweetalert2";
// ===== 確認狀態 =====
export function ChickCheckdate(message, text, icon) {
    Swal.fire({
        title: message,
        text: text,
        icon: icon,
        confirmButtonColor: "#20a8d8",
    });
}