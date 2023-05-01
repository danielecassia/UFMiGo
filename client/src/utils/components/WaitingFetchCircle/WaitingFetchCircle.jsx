import { CircularProgress } from '@mui/material';


export function WaitingFetchCircle({ height = 70 }) {
  return (
    <div
      style={{
        height: `${height}vh`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CircularProgress />
    </div>
  )
}