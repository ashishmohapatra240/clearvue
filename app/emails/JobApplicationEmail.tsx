import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface JobApplicationEmailProps {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  position: string;
  location: string;
  resumeUploaded: boolean;
}

export const JobApplicationEmail = ({
  fullName,
  phone,
  email,
  address,
  position,
  location,
  resumeUploaded,
}: JobApplicationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New job application from {fullName} for {position}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Job Application</Heading>
          <Text style={text}>
            You have received a new job application for the position of <strong>{position}</strong>.
          </Text>
          <Section style={detailsSection}>
            <Text style={detailItem}>
              <strong>Name:</strong> {fullName}
            </Text>
            <Text style={detailItem}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={detailItem}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={detailItem}>
              <strong>Address:</strong> {address}
            </Text>
            <Text style={detailItem}>
              <strong>Position:</strong> {position}
            </Text>
            <Text style={detailItem}>
              <strong>Preferred Location:</strong> {location}
            </Text>
            <Text style={detailItem}>
              <strong>Resume:</strong> {resumeUploaded ? "Uploaded (available in application system)" : "Not uploaded"}
            </Text>
          </Section>
          <Text style={text}>
            Please review this application and contact the candidate at your earliest convenience.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e6ebf1",
  borderRadius: "5px",
  margin: "0 auto",
  padding: "20px",
  width: "100%",
  maxWidth: "600px",
};

const h1 = {
  color: "#db2777",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  textAlign: "center" as const,
};

const text = {
  color: "#4a5568",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
};

const detailsSection = {
  backgroundColor: "#f8fafc",
  borderRadius: "5px",
  padding: "15px",
  margin: "20px 0",
};

const detailItem = {
  color: "#4a5568",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "8px 0",
};

export default JobApplicationEmail; 