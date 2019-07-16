import { Component } from "react";
import { Template, Meta } from "../components/"
import { ThemeProvider } from 'styled-components';



class Index extends Component {
    render() {
        return (
            <ThemeProvider>
                <Template>
                    <Meta
                        title={`Remote Job Lists`}
                        description={`Some sample description`}
                    />
                    <p>Hello Next.js</p>
                </Template>
            </ThemeProvider>
        );
    }
}

export default Index;
