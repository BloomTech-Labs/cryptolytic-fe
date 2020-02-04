import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react"
import Typography from '@material-ui/core/Typography'


const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class IndexChart extends Component {
	state = {};
    getDerivedStateFromProps(props) {
        this.setState({
            ...this.state
        })
    }  
    componentWillMount(props) {
        this.setState({
            ...this.state
        })
    }
    componentDidUpdate(props) {
    }
    render(props) {      
        if(this.props.options)
		return (
			<div style={{ width: "50%", marginLeft: "21vw", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>
				<Typography style={{ fontSize: '1.4rem' }}>Market Index</Typography>
				<CanvasJSChart options={this.props.options} onRef={ref => (this.chart = ref)} />   
			</div>
        )
        else
        return (
            <></>
        )}
}


export default IndexChart