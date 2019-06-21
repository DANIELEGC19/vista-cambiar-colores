import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }  

  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

  
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    button: {
        margin: theme.spacing(1),
      },
      leftIcon: {
        marginRight: theme.spacing(1),
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      iconSmall: {
        fontSize: 20,
      },
      container: {
        alignItems : 'left'
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: 50,
        width: 200,
      },
      li: {
        listStyle : 'none',
        marginTop: 20
      }
  }));

  export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }

    const list = ['white', 'blue', 'red','yellow','black'];

    const SimpleList = () => (
    <ul>
        {list.map(function(item) {
        return <li key={item} className={classes.li}>
                   <Button variant="contained" className={classes.button} style={{backgroundColor: item}}>
                   </Button>
                  {item}
                  <br/>
                  <TextField
                    id="standard-with-placeholder"
                    label="Nuevo Color"
                    placeholder=""
                    className={classes.textField}/>
               </li>;
        })}
    </ul>
    );
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Cambiar CSS" />
          </Tabs>
        </AppBar>
        {value === 0 && 
        <TabContainer className={classes.container}>
        <text>
            Carga tu archivo CSS.    
            </text>    
            <Button variant="contained" color="primary" className={classes.button}>
            Cargar
            <CloudUploadIcon className={classes.rightIcon} />
            </Button>
            <SimpleList/>    
        </TabContainer>}
        <Button variant="contained" color="primary" className={classes.button}>
         Cambiar
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
         Descargar
        </Button>
      </div>
    );
  }
