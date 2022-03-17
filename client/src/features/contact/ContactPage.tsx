import { Button, ButtonGroup, Typography } from "@mui/material";
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function ContactPage() {
    const dispatch = useAppDispatch();
    const {data, title} = useAppSelector(state => state.counter);

    return (
        <Fragment>
            <Typography variant='h2'>
                {title}
            </Typography>
            <Typography variant='h2'>
                The date is: {data}
            </Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(decrement(1))} variant='contained' color='error'>Decrement</Button>
                <Button onClick={() => dispatch(increment(1))} variant='contained' color='primary'>Decrement</Button>
            </ButtonGroup>
        </Fragment>
    )
}