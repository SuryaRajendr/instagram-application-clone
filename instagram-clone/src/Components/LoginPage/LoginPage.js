import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import inst_image from '../../images/instaLoginPage.PNG'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        Hellow
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <div>
                                <img src={inst_image} width="300" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        simplilearn
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage