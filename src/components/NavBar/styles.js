import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',

    // the below styles will be applied to only mobile devices
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),

    // the below styles will be applied to all device except the small screen
    // devices
    [theme.breakpoints.up('sm')]: {
      // We do not want to show menu Button on bigger screen devices
      display: 'none',
    },
  },
}));
