import React, { Component } from 'react'
import { connect } from 'react-redux'


 class Projects extends Component {
  
    render() {
        console.log("redux>>>>>>>>", this.props);
        const { projects } = this.props;


        return (
            <div>
           {projects && projects.map(project => {
               return (
                   <h1 style={{color: 'white'}}>{project.title}</h1>
               )
           })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }

}


export default connect(mapStateToProps)(Projects);