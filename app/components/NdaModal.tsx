"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const NDA_PASSWORD = "Product@2026";

interface NdaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock: () => void;
}

const NdaModal = ({ isOpen, onClose, onUnlock }: NdaModalProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) {
      setPassword("");
      setError(false);
      setShowPassword(false);
    }
  }, [isOpen]);

  const handleUnlock = () => {
    if (password === NDA_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "340px",
          maxWidth: "90vw",
          background: "#1c1d20",
          border: "1px solid #2F3037",
          borderRadius: "18px",
          padding: "28px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 800,
            color: "#FFFFFF",
            margin: "0 0 8px",
          }}
        >
          Project Under NDA
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#A7AAB4",
            margin: "0 0 20px",
          }}
        >
          Enter password to continue
        </p>

        <div style={{ position: "relative", marginBottom: error ? "6px" : "14px" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            placeholder="Password"
            style={{
              width: "100%",
              padding: "12px 40px 12px 16px",
              borderRadius: "12px",
              border: `1px solid ${error ? "#ff4d4f" : "#2F3037"}`,
              background: "#232529",
              color: "#FFFFFF",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#A7AAB4",
              fontSize: "16px",
              padding: 0,
              lineHeight: 1,
            }}
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>

        {error && (
          <p
            style={{
              color: "#ff4d4f",
              fontSize: "14px",
              marginBottom: "16px",
              textAlign: "left",
            }}
          >
            Incorrect password.
          </p>
        )}

        <button
          onClick={handleUnlock}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "#00F48D",
            color: "#0B0B0C",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "18px",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#00d97b")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#00F48D")}
        >
          <span>🔒</span>
          <span>Unlock</span>
        </button>

        <a
          href="mailto:picksipgo@gmail.com?subject=NDA Access Request"
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#FFFFFF",
            textDecoration: "underline",
          }}
        >
          Request Access
        </a>
      </div>
    </div>,
    document.body
  );
};

export default NdaModal;
