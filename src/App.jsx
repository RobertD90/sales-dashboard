import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <>
      <h2 className='Words'></h2>

      <Button variant='contained' color="success" onClick={() => alert('test')}>test button</Button>
      <Button variant='contained' color="success" onClick={() => alert('test')}>test button</Button>

      <Grid container spacing={3} alignItems="flex-start">

        <Grid item xs={2} md={6}>

          <div className='gridDivLarge'></div>
        </Grid>
        <Grid item xs={3}>

          <div className='gridDiv'></div>
        </Grid>
        <Grid item xs={3}>

          <div className='gridDiv'></div>
        </Grid>
        <Grid item xs={3}>

          <div className='gridDiv5'></div>
          <div className='gridDiv6'></div>
          <div className='gridDiv7'></div>


        </Grid>
        <Grid item xs={3} md={4}>
          {/* Smaller Grid Item 2 */}
          <div className='gridDiv2'>
            <Typography noWrap>{` Some information dataasdasdasdasdadasdasd`}</Typography>
          </div>
        </Grid>
        <Grid item xs={3} md={1} >
          {/* Smaller Grid Item 3 */}
          {/* <div className='gridDiv3'></div> */}
        </Grid>
      </Grid>
    </>
  );
}

export default App;