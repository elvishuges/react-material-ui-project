import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Course = (props) => {
    return(
        <div>
          { props.course ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={props.avatar}
                        title={props.first_name}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.first_name}
                        </Typography>
                        <Typography component="p">
                            {props.first_name}
                        </Typography>
                    </CardContent>                    
                </Card>
          ): null }  
        </div>
    )
}
export default Course