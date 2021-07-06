import MyWorkCard from '../components/MyWorkCard';
import MyImageCard from '../components/MyImageCard';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

export default function HomePage() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MyImageCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyWorkCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyWorkCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyWorkCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyWorkCard />
        </Grid>
      </Grid>
    </Container>
  );
}
