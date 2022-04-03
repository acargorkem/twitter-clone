import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Autocomplete from '@mui/material/Autocomplete'
import { InputAdornment, TextField } from '@mui/material'

interface IResult {
  title: string
}

interface searchboxProps {
  results: IResult[]
}

const Searchbox: React.FC<searchboxProps> = ({ results }) => {
  return (
    <Autocomplete
      selectOnFocus={false}
      fullWidth={true}
      options={results.map((result) => result.title)}
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            width: '100%',
            borderRadius: '50px',
          }}
          id="input-with-icon-textfield"
          placeholder="Twitter'da Ara"
          InputProps={{
            ...params.InputProps,
            type: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      )}
    />
  )
}

export default Searchbox
