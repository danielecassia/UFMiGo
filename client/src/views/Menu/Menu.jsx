import * as React from 'react';
import { MenuTemplate } from './MenuTemplate';
import { Typography } from '@mui/material';


export function Menu() {
  return (
    <div>
        <Typography variant="h5" color='secondary'>
            Cardápios relacionados ao dia 03 e 04 de Maio de 2023
        </Typography>
        <div
            style={{display:'flex', flexDirection:'row', marginTop:'20px', justifyContent:'center'}}>
            <MenuTemplate
                title="Hoje"
                subheader='RestauranteS Universitário 1'
            />
            <MenuTemplate
                title="Amanhã"
                subheader='RestauranteS Universitário 1'
            />
        </div>
        <div
            style={{display:'flex', flexDirection:'row', marginTop:'20px', justifyContent:'center'}}>
            <MenuTemplate
                title="Hoje"
                subheader='RestauranteS Universitário 2'
            />
            <MenuTemplate
                title="Amanhã"
                subheader='RestauranteS Universitário 2'
            />
        </div>
    </div>
  );
}
