import React from "react";

const component = (importComponent) => {
    return class extends React.Component {
        constructor() {
            super()
            this.state = {
                cmp: null
            }
        }

        componentDidMount() {
            importComponent()
                .then(comp => this.setState({ cmp: comp.default }) );
        }

        render() {
            const C = this.state.cmp;
            return C ? <C {...this.props} /> : null
        }
    }

}

export default component;