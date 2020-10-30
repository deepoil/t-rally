import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(4)
        },
        inputForm: {
            width: '100vh'
        }
    })
)

export default function SelectCountry() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Typography variant="h6" gutterBottom>
                旅先の国について教えてください
            </Typography>
            <FormControl required color="primary" size="medium" className={classes.inputForm}>
                <InputLabel htmlFor="grouped-select">国を選択</InputLabel>
                <Select defaultValue="" name="countryCd" value="" input={<Input id="grouped-select" />}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {/*{countryItemList}*/}
                </Select>
            </FormControl>
        </Container>
    )
}