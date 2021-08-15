import { CardActionArea, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {IHotel} from './HotelReducer';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height:140,
    },
});

export default function HotelCard(props: IHotel){
    const classes = useStyles();
    if(props.cuisines && props.featured_image && props.name){
      
        return (
            <Card>
                <CardActionArea>
                   <CardMedia
                   className={classes.media}
                   image={props.featured_image}
                   title = {props.name} 
                   /> 
                   <CardContent>
                       <Typography gutterBottom variant="h5" component="h2">
                           {props.name}
                       </Typography>
                       <Typography  variant="body2" component="p">
                           {props.cuisines}
                       </Typography>
                   </CardContent>
                </CardActionArea>
            </Card>    
        )
    }
    return null;
}