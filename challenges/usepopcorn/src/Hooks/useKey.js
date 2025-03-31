import { useEffect } from "react";

export function useKey(key, action) {
    useEffect(
        function () {
            function escapeToClose(e) {
                if (e.code.toLowerCase() === key.toLowerCase()) {
                    action();
                }
            }

            document.addEventListener("keydown", escapeToClose);

            return function () {
                document.removeEventListener("keydown", escapeToClose);
            };
        },
        [action, key]
    );
}