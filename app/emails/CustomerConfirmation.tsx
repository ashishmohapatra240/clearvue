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

interface CustomerConfirmationEmailProps {
  name: string;
  message: string;
}

export const CustomerConfirmationEmail = ({
  name,
  message,
}: CustomerConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting ClearVue</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank You for Contacting Us</Heading>
          <Text style={text}>Hello {name},</Text>
          <Text style={text}>
            We&apos;ve received your message and will get back to you as soon as
            possible. Our team is reviewing your inquiry and will respond within
            24-48 hours.
          </Text>
          <Section style={messageSection}>
            <Text style={messageHeader}>Your message:</Text>
            <Text style={messageContent}>{message}</Text>
          </Section>
          <Text style={text}>
            If you have any urgent concerns, please call us at +91 83839 54955.
          </Text>
          <Text style={text}>
            Best regards,
            <br />
            The ClearVue Team
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

const messageSection = {
  backgroundColor: "#f8fafc",
  borderRadius: "5px",
  padding: "15px",
  margin: "20px 0",
};

const messageHeader = {
  color: "#4a5568",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
};

const messageContent = {
  color: "#4a5568",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
  fontStyle: "italic",
};

export default CustomerConfirmationEmail;
