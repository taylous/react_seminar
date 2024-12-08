import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
});

export const heading = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#333',
});

export const button = style({
  padding: '10px 20px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: '#fff',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});
