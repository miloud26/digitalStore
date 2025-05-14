import { Box, Typography, Link, Container } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Privacy Policy
        </Typography>

        <Typography sx={{ mb: 3 }}>
          Your privacy is important to us. It is our policy to respect your
          privacy regarding any information we may collect from you across our
          website or application.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          1. Information We Collect
        </Typography>
        <Typography sx={{ mb: 2 }}>
          We may collect personal information such as your name, email address,
          phone number, and usage data to provide and improve our service.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          2. How We Use Information
        </Typography>
        <Typography sx={{ mb: 2 }}>
          We use your information to operate our platform, provide customer
          support, send updates, and improve user experience.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          3. Sharing of Information
        </Typography>
        <Typography sx={{ mb: 2 }}>
          We do not share personal information with third parties except when
          required by law or to protect our legal rights.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          4. Security
        </Typography>
        <Typography sx={{ mb: 2 }}>
          We take all reasonable steps to protect your data but cannot guarantee
          absolute security.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          5. Changes
        </Typography>
        <Typography sx={{ mb: 2 }}>
          We may update our privacy policy from time to time. We encourage users
          to check this page regularly.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          6. Contact Us
        </Typography>
        <Typography>
          If you have any questions about this policy, please contact us on
          Telegram:{" "}
          <Link
            style={{ color: "#000" }}
            href="https://t.me/Digital_dz"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Digital_dz
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
