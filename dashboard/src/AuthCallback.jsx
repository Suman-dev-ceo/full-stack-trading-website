import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        try {
            // token is passed in the URL fragment: #token=...
            const hash = window.location.hash || "";
            const m = hash.match(/[#&]token=([^&]+)/);
            const token = m ? decodeURIComponent(m[1]) : null;

            if (token) {
                localStorage.setItem("token", token);
            }
        } catch (_) {
            // ignore
        } finally {
            // Clean the URL and go to the app home (or wherever your default route is)
            navigate("/", { replace: true });
        }
    }, [navigate]);

    return null; // nothing to render
}