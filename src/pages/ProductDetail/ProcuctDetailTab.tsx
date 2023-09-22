import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function ProductDetailTab() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab className=' uppercase hover:text-hover ' label='Description' {...a11yProps(0)} />
            <Tab className=' uppercase hover:text-hover' label='Comments' {...a11yProps(1)} />
            <Tab className=' uppercase hover:text-hover' label='Reviews' {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt vero, nihil placeat nesciunt quas tempore quia
          incidunt debitis officiis, minima harum? Ducimus, reprehenderit facilis! Ex a debitis molestiae aperiam modi
          reiciendis numquam! Est itaque iusto molestiae eveniet praesentium vel, quisquam consectetur officia fugit, at
          maxime animi voluptas minima corrupti laboriosam qui vitae ducimus labore molestias natus id excepturi
          repudiandae ipsum quos. Fugit repudiandae quaerat suscipit nostrum soluta aspernatur fugiat adipisci similique
          harum expedita, recusandae ipsam earum! Ipsum fugit quisquam amet a aliquid distinctio beatae ea maxime
          tempora, alias aspernatur rerum id eligendi animi, doloremque non accusamus optio ipsam? Error, ad!
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur officiis sunt eos excepturi ipsa quidem
          praesentium ratione? Maxime assumenda autem expedita iusto neque, accusantium optio animi nobis mollitia nam
          recusandae excepturi, quidem porro obcaecati, itaque fuga. Explicabo, quos sunt? Quas nesciunt provident
          dolorum enim eligendi molestiae neque deleniti quis. Assumenda laudantium earum recusandae deleniti quisquam
          dignissimos provident, quasi autem, dolore accusamus dicta quas. Itaque, beatae? Veritatis culpa repellat iure
          quaerat repellendus necessitatibus iste ullam est at vero! Praesentium nobis incidunt architecto assumenda
          optio non distinctio, molestiae saepe tempore officiis fuga? Nemo quod corporis aliquam nam quos ipsa
          corrupti? Deleniti, pariatur?
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod minima ut fugiat sapiente. Aperiam dolor
          itaque commodi recusandae necessitatibus ea accusantium veritatis ipsa a eum, exercitationem voluptates
          aspernatur voluptatem ducimus doloribus, laudantium quaerat suscipit quas illo soluta illum ex cum voluptas
          eos. Laborum voluptatum maxime illum recusandae vero? Beatae temporibus cupiditate obcaecati molestias,
          consequuntur voluptates ipsa asperiores qui animi saepe vel assumenda maxime accusamus eos eius, atque placeat
          vero voluptatum officiis commodi ducimus dolore. Consectetur harum temporibus, vero quia incidunt enim eius
          quae nam, tempore rerum blanditiis accusantium nulla vitae? Exercitationem error alias, voluptatum temporibus
          inventore enim autem accusantium?
        </CustomTabPanel>
      </Box>
    </div>
  )
}
