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

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const AdminNotificationEmail = ({
  name,
  email,
  message,
}: AdminNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            You have received a new message from your website contact form.
          </Text>
          <Section style={detailsSection}>
            <Text style={detailItem}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={detailItem}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={messageHeader}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageContent}>{message}</Text>
          </Section>
          <Text style={text}>
            Please respond to this inquiry at your earliest convenience.
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

const messageHeader = {
  color: "#4a5568",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "16px 0 8px 0",
};

const messageContent = {
  color: "#4a5568",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
  padding: "10px",
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "4px",
};

export default AdminNotificationEmail;
