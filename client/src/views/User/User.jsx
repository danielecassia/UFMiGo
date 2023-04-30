import react from 'react';
import Image from "mui-image";
import Duck from '../../assets/badDuck.gif'
import { Typography, Toolbar } from '@mui/material';
export function User() {
    return (
        <div className="outlet">
            <Image
                src={Duck}
                duration={0}
                style={{
                    width: 500,
                    height: 500,
                    marginBottom: 16
                }}
            />
            <Typography variant="h3" color='secondary' align='center'>
                OPSS!!
            </Typography>
            <Typography variant="h5" color='primary'align='center'>
                Desculpe! Página em construção.
            </Typography>
            <Toolbar/>
            
        </div>
    );
}