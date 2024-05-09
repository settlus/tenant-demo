import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #A8A6A6',
  minHeight: 0,
  marginTop: 12,
  padding: 0,
  '& .MuiTabs-indicator': {
    backgroundColor: 'black',
    padding:0,
  },
  '& .MuiBox-root': {
    padding: 0,
  },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
      minHeight: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(0),
    color: '#A8A6A6',
    minHeight: '0rem',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: 'black',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: 'black',
      fontWeight: 'bold',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);


interface StyledTabProps {
  label: string;
}

type PropType = {
  handleClick: (type:string)=>void,
}

export default function Menu({handleClick}: PropType): React.ReactElement {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if(newValue===0) handleClick('on');
    else handleClick('off');
  };

  return (
      <AntTabs sx={{padding:0, marginBottom:1}} value={value} onChange={handleChange}>
        <AntTab label="On-chain" />
        <AntTab label="Off-chain" />
      </AntTabs>
  );
}