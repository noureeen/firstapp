import { CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useActionData } from 'react-router-dom'

const grids = () => {
  var[products,setproducts]=useState([])
  useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
  .then((response)=>{
    console.log(response);
    setproducts(response.data);
})
  .catch((error)=>{console.log(error)})
})

  return (
    <div stye={{margin:'4%'}}>
      <Grid container spacing={2}>
        {products.map((val,i)=>{
          return(
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{maxWidth:345}}>

                <CardMedia
                    sx={{height:140}}
                    image={val.image}

                    />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant='body2' color="text.secondary">
                   
                  </Typography>
                </CardContent>
                </Card>
                </Grid>

          )
        })}

      </Grid>

    </div>
  )
}

export default grids