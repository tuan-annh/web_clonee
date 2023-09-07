import { Grid, List, ListItem, ListItemButton, ListItemText, Button, Input, TextField } from '@mui/material'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Profile() {
  const [btnUpdate, setBtnUpdate] = useState(false)
  const [selected, setSelected] = useState(true)
  const { register, handleSubmit } = useForm()
  const onSavePassword = (data: object) => {
    console.log(data)
  }

  return (
    <div className='h-screen-70'>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <nav aria-label='main mailbox folders' className='mt-20'>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setSelected(true)}>
                  <ListItemText
                    primary='Thông tin cá nhân'
                    style={{ textDecoration: selected ? 'underline' : 'none' }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setSelected(false)}>
                  <ListItemText primary='Đổi Mật Khẩu' style={{ textDecoration: selected ? 'none' : 'underline' }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setSelected(false)}>
                  <ListItemText>
                    <Link to=''>Log Out</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Grid>
        <Grid item xs={10} className='text-center'>
          {selected ? (
            <>
              <TableContainer component={Paper} className='mx-auto mt-20' style={{ width: '70%' }}>
                <Table aria-label='simple table'>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className='h-20'>
                    <TableCell component='th' scope='row'>
                      User Name
                    </TableCell>
                    <TableCell align='right'>{btnUpdate ? <Input value='Johnd' /> : <p>Johnd</p>}</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className='h-20'>
                    <TableCell component='th' scope='row'>
                      Name
                    </TableCell>
                    <TableCell align='right'>{btnUpdate ? <Input value='John Doe' /> : <p>John Doe</p>}</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className='h-20'>
                    <TableCell component='th' scope='row'>
                      Email
                    </TableCell>
                    <TableCell align='right'>
                      {btnUpdate ? <Input value='john@gmail.com' /> : <p>john@gmail.com</p>}
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className='h-20'>
                    <TableCell component='th' scope='row'>
                      Phone Number
                    </TableCell>
                    <TableCell align='right'>{btnUpdate ? <Input value='0123456789' /> : <p>0123456789</p>}</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className='h-20'>
                    <TableCell component='th' scope='row'>
                      Address
                    </TableCell>
                    <TableCell align='right'>{btnUpdate ? <Input value='New Road' /> : <p>New Road</p>}</TableCell>
                  </TableRow>
                </Table>
              </TableContainer>
              <Button variant='outlined' style={{ marginTop: 20 }} onClick={() => setBtnUpdate(!btnUpdate)}>
                {btnUpdate ? 'Save' : 'Update'}
              </Button>
            </>
          ) : (
            <form className='mx-auto mt-20 flex flex-col items-center gap-5' onSubmit={handleSubmit(onSavePassword)}>
              <TextField label='Old password' className='w-1/2' {...register('old_password')} />
              <TextField label='New password' className='w-1/2' {...register('new_password')} />
              <Button variant='outlined' type='submit'>
                Save
              </Button>
            </form>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default Profile
