import { Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme)=>({
    footer:{
        background:'#585858',
        width:'100%',
        height:'20px',
        position:'fixed',
        display: 'flex',
        justifyContent: 'center',
    },
    typo:{
        color: 'white',
        fontSize: '12px',
        fontFamily:'cursive'
    }
}));
const Footer = () =>{
    const classes = useStyle();
    return <div className={classes.footer}>
        <Typography className={classes.typo}>Designed by Aashay Goel</Typography>
    </div>
};
export default Footer;