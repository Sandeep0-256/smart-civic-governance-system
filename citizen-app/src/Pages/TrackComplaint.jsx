import { useState } from "react";

function TrackComplaint() {
  const [ticketId, setTicketId] = useState("");
  const [complaint, setComplaint] = useState(null);

  const searchComplaint = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/complaints/${ticketId}`
      );

      const data = await response.json();

      if (data.message) {
        alert("Complaint not found");
        return;
      }

      setComplaint(data);

    } catch (error) {
      console.error(error);
      alert("Failed to fetch complaint");
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
          maxWidth: "1000px",
          margin: "auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Complaint Tracking Portal</h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          Search complaint using Ticket ID
        </p>

        <hr />

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Enter Ticket ID"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
            }}
          />

          <button
            onClick={searchComplaint}
            style={{
              padding: "12px 20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>

        {complaint && (
          <>
            <br />

            <div style={cardStyle}>
              <h2>Ticket Details</h2>

              <p>
                <strong>Ticket ID:</strong>{" "}
                {complaint.ticketId}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {complaint.description}
              </p>

              <p>
                <strong>Severity:</strong>{" "}
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {complaint.severity}
                </span>
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {complaint.status}
              </p>

              <p>
                <strong>Latitude:</strong>{" "}
                {complaint.latitude}
              </p>

              <p>
                <strong>Longitude:</strong>{" "}
                {complaint.longitude}
              </p>
            </div>

            <br />

            <div style={timelineCard}>
              <h2>Progress Timeline</h2>

              <p>✅ Complaint Submitted</p>
              <p>✅ AI Analysis Completed</p>
              <p>✅ GPS Location Captured</p>
              <p>🟡 Awaiting Municipality Review</p>
              <p>⬜ Resolution Pending</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
};

const timelineCard = {
  backgroundColor: "#ecfeff",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #67e8f9",
};

export default TrackComplaint;