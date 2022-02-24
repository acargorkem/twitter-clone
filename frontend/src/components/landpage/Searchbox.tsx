import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Autocomplete from '@mui/material/Autocomplete'
import { InputAdornment, TextField } from '@mui/material'

const Searchbox: React.FC<{ results: { title: string }[] }> = ({ results }) => {
  return (
    <Autocomplete
      fullWidth={true}
      options={results.map((result) => result.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ marginTop: '2rem', width: '100%', borderRadius: '50px' }}
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
