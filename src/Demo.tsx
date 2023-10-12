import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Typography } from '@mui/material'

const texts = [
  'Hallo',
  'semuanya',
  'selamat pagi!',
  'Hallo',
  'semuanya',
  'selamat pagi!',
  'Hallo',
  'semuanya',
  'selamat pagi!',
  'Hallo',
  'semuanya',
  'selamat pagi!',
]

const Demo = () => {
  const [open, setOpen] = useState(false)
  const [indexesInMark, setIndexesInMark] = useState<number[]>([])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog fullWidth maxWidth='sm' open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent sx={{ overflow: 'visible' }}>
          {texts.map((text, index) => (
            <Typography
              key={index}
              sx={[
                {
                  position: 'relative',
                  display: 'inline-block',
                  marginRight: 0.25,
                  cursor: 'pointer',
                },
                {
                  '&:hover:not(:last-child)': {
                    backgroundColor: 'pink',

                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      right: 0,
                      bottom: 0,
                      width: '1px',
                      height: '30px',
                      backgroundColor: 'blue',
                    },
                  },
                },
                indexesInMark.includes(index) && {
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '2px !important',
                    height: '30px',
                    backgroundColor: 'red !important',
                  },
                },
              ]}
              onClick={() => {
                setIndexesInMark((val) => {
                  if (val.includes(index)) return val.filter((i) => i !== index)
                  if (indexesInMark.length < 5) return [...val, index]
                  return val
                })
              }}
            >
              {text}
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Demo
