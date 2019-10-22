import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Course from './Course'
import usuario from "../services/API/usuario.service";
const SPACE_ID = '[INSERT CONTENTFUL SPACE ID]'
const ACCESS_TOKEN = '[INSERT CONTENTFUL ACCESS TOKEN]'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
class CoursesList extends Component {
    state = {
        courses: [],
        usuarios:[],
        searchString: ''
    }
    constructor() {
        super()        
    }

    componentDidMount(){
        this.getUsuarios()
    }
    getUsuarios = () => {
        usuario.usuario.listausuarios().then(rsp => { 
            console.log('resposta lista',rsp);   
            this.setState({usuarios: rsp.data.data})           
        })
        .catch(err => {
          // handle your error here
          console.log(err)          
        })         
    }

    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({courses: response.items})
            console.log(this.state.courses)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }
    render() {
        return (
            <div>
                { this.state.usuarios ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for usuários"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={10} style={{padding: 24}}>
                            { this.state.usuarios.map(currentCourse => (
                                <Grid key={currentCourse.id} item xs={12} sm={4} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default CoursesList;