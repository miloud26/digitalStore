import React from "react";
import { Box, Typography, Container } from "@mui/material";

const ReturnPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
          Return Policy
        </Typography>

        <Typography sx={{ mb: 3 }}>
          We want you to be completely satisfied with your purchase. If you're not happy, we're here to help.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          1. Eligibility for Returns
        </Typography>
        <Typography sx={{ mb: 2 }}>
          You can return items within 14 days of receipt. To be eligible, your item must be unused and in the same condition you received it, in the original packaging.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          2. Non-returnable Items
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Some items are non-returnable, such as perishable goods, personal care products, and gift cards.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          3. Refunds
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Once we receive your return, we’ll inspect it and notify you of the approval or rejection of your refund. If approved, the refund will be processed to your original method of payment within a few business days.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          4. Shipping Costs
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Return shipping costs are the responsibility of the customer unless the item was defective or sent in error.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 1 }}>
          5. How to Start a Return
        </Typography>
        <Typography>
          To initiate a return, please contact our support team at:{" "}
          <a href="mailto:support@example.com">support@example.com</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default ReturnPolicy;
