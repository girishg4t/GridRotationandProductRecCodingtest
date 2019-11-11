import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button, Grid } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import { addCount } from './../actions/addCount';

export default function IncrementCount() {

    const counterState = useSelector(state => state.counter);
    const onButtonClick = event => {
        dispatch(addCount);
    }

    const dispatch = useDispatch();

    return (

        <Paper style={{ margin: 16, padding: 16 }}>
            <InputLabel htmlFor="bundle">Increment Count : {counterState}</InputLabel>
            <Grid xs={2} md={1} item>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onButtonClick}
                >
                    Increment Counter
        </Button>
            </Grid>           
        </Paper>

    )
}
