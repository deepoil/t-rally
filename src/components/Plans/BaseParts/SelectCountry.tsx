import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountry } from '../../../actions/globalPlanBasicActions';
import {ListSubheader} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(4)
        },
        inputForm: {
            width: '100vh'
        }
    })
);

// 国一覧リストItem生成
const generateCountryListItem = (countryList: object) => {
    let countryListItem = [];
    for (let key in countryList) {
        countryListItem.push(
            <ListSubheader
                 value="" disableGutters disableSticky key={key}>{key}
            </ListSubheader>
        );
        for (let i = 0; i < countryList[key].length; i++) {
            countryListItem.push(
                <MenuItem
                    key={countryList[key][i].countryCode}
                    value={countryList[key][i].countryCode + '::' + countryList[key][i].rgnCode}>
                    {countryList[key][i].countryName}
                </MenuItem>
            );
        }
    }
    return countryListItem;
}

export default function SelectCountry() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCountry());
    }, []);
    const planSelector = (state: any) => state.globalPlanBasic.countryList;
    const countryList = useSelector(planSelector);
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
                    {generateCountryListItem(countryList)}
                </Select>
            </FormControl>
        </Container>
    )
}