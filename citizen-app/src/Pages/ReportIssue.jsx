import { useState } from "react";

function ReportIssue() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [issue, setIssue] = useState("");
  const [severity, setSeverity] = useState("");
  const [confidence, setConfidence] = useState("");

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        alert("Location access denied.");
      }
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    // Mock AI Detection
    setIssue("Pothole");
    setSeverity("High");
    setConfidence("97%");
  };

  const handleSubmit = async () => {
    if (!description) {
      alert("Please enter description");
      return;
    }

    if (!latitude || !longitude) {
      alert("Please capture location first");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/complaint",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            severity: severity || "Medium",
          }),
        }
      );

      const data = await response.json();

      alert(`
✅ Complaint Submitted Successfully

Ticket ID: ${data.ticketId}

Status: ${data.status}

Severity: ${data.severity}
      `);

      console.log(data);
    } catch (error) {
      console.error(error);
      alert("Backend connection failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fb",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "linear-gradient(135deg,#ffffff,#f8fafc)",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}

        <div
          style={{
            borderBottom: "2px solid #e5e7eb",
            paddingBottom: "15px",
            marginBottom: "25px",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#1e293b",
            }}
          >
            Smart Civic Governance System
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "10px",
            }}
          >
            AI Powered Civic Issue Reporting
          </p>
        </div>

        {/* Upload Section */}

        <div
          style={{
            border: "2px dashed #3b82f6",
            borderRadius: "15px",
            padding: "30px",
            textAlign: "center",
            backgroundColor: "#eff6ff",
          }}
        >
          <h3>📸 Upload Issue Image</h3>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                marginTop: "20px",
                borderRadius: "12px",
              }}
            />
          )}
        </div>

        <br />

        {/* AI Analysis */}

        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid #cbd5e1",
          }}
        >
          <h2>🤖 AI Analysis</h2>

          <p>
            <strong>Detected Issue:</strong>{" "}
            {issue || "Waiting for image upload..."}
          </p>

          <p>
            <strong>Severity:</strong>{" "}
            {severity || "Waiting for image upload..."}
          </p>

          <p>
            <strong>Confidence:</strong>{" "}
            {confidence || "Waiting for image upload..."}
          </p>

          {severity && (
            <div
              style={{
                backgroundColor: "#fee2e2",
                color: "#dc2626",
                padding: "12px",
                borderRadius: "10px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              🚨 Priority Level: {severity}
            </div>
          )}
        </div>

        <br />

        {/* Description */}

        <div>
          <h3>📝 Description</h3>

          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue..."
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
            }}
          />
        </div>

        <br />

        {/* GPS */}

        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid #cbd5e1",
          }}
        >
          <h2>📍 Location Information</h2>

          <button
            onClick={getLocation}
            style={{
              padding: "12px 20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Get GPS Location
          </button>

          <p style={{ marginTop: "15px" }}>
            <strong>Latitude:</strong>{" "}
            {latitude || "Not Captured"}
          </p>

          <p>
            <strong>Longitude:</strong>{" "}
            {longitude || "Not Captured"}
          </p>
        </div>

        <br />

        {/* Submit */}

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "18px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🚀 Submit Complaint
        </button>
      </div>
    </div>
  );
}

export default ReportIssue;