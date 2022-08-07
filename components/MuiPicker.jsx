import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';

const MuiPicker = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <Stack className=" bg-white rounded-md">
      <DateTimePicker
        placeholder="Date Time Picker"
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              placeholder: 'mm-dd-yy',
            }}
            // InputLabelProps={{ shrink: false }}
            sx={{
              //   '& .MuiOutlinedInput-notchedOutline': { borderColor: 'green' },

              //   '&:hover .MuiOutlinedInput-notchedOutline': {
              //     borderColor: 'red',
              //   },
           

              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'green',
              },

              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },

              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'red',
              },

              '& .MuiFilledInput-input': {
                backgroundColor: 'lightblue',
                border: '1px solid red',
              },

              //   label: {
              //     color: 'pink',
              //   },

              //   '& .MuiOutlinedInput-root': {
              //     '&.Mui-focused fieldset': {
              //       borderColor: 'blue',
              //     },
              //   },

              //   '& label.Mui-focused': {
              //     color: 'transparent',
              //   },

              '& .MuiFilledInput-root': {
                backgroundColor: 'red',
              },
            }}
          />
        )}
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};

export default MuiPicker;
