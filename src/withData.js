import React from "react";


function withData(WrapperComponent){
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                defaultName: 'Ania',
                apiData: []
            }
        }
        componentDidMount(){
            this.setState({ apiData : ['Patryk', 'Ania']})
        }
        render(){
            return (
                <WrapperComponent
                    defaultName={this.state.defaultName}
                    apiData={this.state.apiData}
                    {...this.props}
                />
            )
        }
    }
}

export default withData;