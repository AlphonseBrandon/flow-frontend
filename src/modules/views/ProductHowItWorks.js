import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="../asserts/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + "/asserts/productHowItWorks1.svg"}
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                Simply upload your PDF document to the PDF Chat platform.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + "/asserts/productHowItWorks2.svg"}
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                Flow.ai automatically extracts the text and analyzes the content to identify key insights.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + "/asserts/productHowItWorks3.svg"}
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {'Engage in interactive conversations to  gain valuable insights from your PDF documents.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
