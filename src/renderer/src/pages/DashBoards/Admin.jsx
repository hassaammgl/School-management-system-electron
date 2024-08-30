import {
  Stack,
  Heading,
  Menu,
  Box,
  Flex,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BiHome } from 'react-icons/bi'
import { LuWorkflow } from 'react-icons/lu'
import { FaUserDoctor } from 'react-icons/fa6'
import { AiOutlineSchedule } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

const Admin = () => {
  return (
    <Stack width={'100%'} height={'100vh'}>
      <Flex flexWrap={'wrap'}></Flex>
    </Stack>
  )
}

export default Admin

export const AdminOptions = () => {
  return (
    <Stack spacing={4}>
      <Heading marginTop={10}>Admin Options</Heading>
      <Menu>
        <MenuButton onClick={() => {}} as={Button} leftIcon={<BiHome />}>
          Dashboard
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton onClick={() => {}} as={Button} leftIcon={<LuWorkflow />}>
          Departments
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton as={Button} leftIcon={<FaUserDoctor />} rightIcon={<ChevronDownIcon />}>
          Doctors
        </MenuButton>
        <MenuList>
          <MenuItem>All Doctors</MenuItem>
          <MenuItem>Patients Case History</MenuItem>
          <MenuItem>Payments</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<MdOutlineAdminPanelSettings />}
          rightIcon={<ChevronDownIcon />}
        >
          Admin
        </MenuButton>
        <MenuList>
          <MenuItem>All Nurses</MenuItem>
          <MenuItem>All Pharmasists</MenuItem>
          <MenuItem>All Receptionist</MenuItem>
          <MenuItem>All Labourist</MenuItem>
          <MenuItem>All Accountants</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} leftIcon={<AiOutlineSchedule />} rightIcon={<ChevronDownIcon />}>
          Schedules
        </MenuButton>
        <MenuList>
          <MenuItem>All Schedules Details</MenuItem>
          <MenuItem>Holidays</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} leftIcon={<AiOutlineSchedule />} rightIcon={<ChevronDownIcon />}>
          Appointments
        </MenuButton>
        <MenuList>
          <MenuItem>All Appointments Details</MenuItem>
          <MenuItem>Add Appointment</MenuItem>
          <MenuItem>Today Appointments</MenuItem>
          <MenuItem>Upcoming Appointments</MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  )
}
