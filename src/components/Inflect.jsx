import React, { useState } from 'react'
import useInflect from '../hooks/useInflect'
import { options } from '../data/options'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

const Inflect = () => {
    const [caseOfNoun, setCaseOfNoun] = useState('')
    const [noun, setNoun] = useState('')
    const { result, inflect } = useInflect()

    const handleChange = (event) => {
        setCaseOfNoun(event.target.value)
    }
    const onChangeNoun = (event) => {
        setNoun(event.target.value)
    }

    const handleClick = () => {
        inflect(noun, caseOfNoun)
    }

    return (
        <div>
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Box sx={{ width: '100%', maxWidth: 550, alignItems: 'center', mb: 4}}>
                    <Typography variant="h3" color="primary">
                        Склонение по падежам
                    </Typography>
                </Box>
                <TextField id="standard-basic" label="Слово" variant="standard" sx={{ m: 1, minWidth: 220 }}
                    value={noun}
                    onChange={onChangeNoun}
                />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
                    <InputLabel>Падеж</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={caseOfNoun}
                        label="Падеж"
                        onChange={handleChange}
                    >
                        {options.map(casee => (
                            <MenuItem value={casee.value} key={casee.label}>{casee.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button variant="contained"
                    disabled={noun.length < 2 || caseOfNoun === ''}
                    onClick={handleClick}
                    sx={{ mt: 2, mb: 5 }}
                >
                    Склонять
                </Button>
                <Typography variant="h3" color="textPrimary">
                    {result}
                </Typography>
            </Box>
        </div>
    );
}

export default Inflect