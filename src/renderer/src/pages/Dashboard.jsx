/* eslint-disable react/prop-types */
// import { LinkButton } from '../components'
import { useSelector } from 'react-redux'
import {
  Heading,
  Stack,
  VStack,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  Drawer,
  DrawerContent,
  DrawerFooter,
  Button,
  DrawerCloseButton,
  HStack
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRef, useContext } from 'react'
import Admin, { AdminOptions } from './DashBoards/Admin'
import { useDispatch } from 'react-redux'
import { deleteUserDetails } from '../redux/user/userSlice'
import { pageContext } from '../context/pageContext'

const Dashboard = () => {
  const user = useSelector((state) => state.user)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  console.log(user.value)
  console.log('isopen ', isOpen)

  return (
    <Stack
      width={'100%'}
      backgroundColor={'rgb(41, 40, 40)'}
      height={'100vh'}
      position={'relative'}
    >
      <IconButton ref={btnRef} onClick={onOpen} width={18} position={'absolute'} top={15} left={15}>
        <HamburgerIcon />
      </IconButton>
      <DrawerBox role={user.value.role} isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      {user.value.role === 'Admin' ? (
        <Admin />
      ) : user.value.role === 'Patient' ? (
        <Heading>Patient</Heading>
      ) : user.value.role === 'Docter' ? (
        <Heading>Docter</Heading>
      ) : (
        <Heading>No Role Found!!</Heading>
      )}
    </Stack>
  )
}

export default Dashboard

const DrawerBox = ({ isOpen, onClose, btnRef, role }) => {
  const user = useSelector((state) => state.user)
  console.log(user.value)

  const dispatch = useDispatch()

  const onLogout = async () => {
    const token = localStorage.getItem('token')
    const response = await window.api.logout(token)
    console.log(response)

    const { setPage } = useContext(pageContext)

    if (response.success) {
      localStorage.removeItem('token')
      dispatch(deleteUserDetails())
      setPage('Login')
      console.log(user.value)
    }
  }

  return (
    <Drawer isOpen={isOpen} placement="left" finalFocusRef={btnRef} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent backgroundColor={'#61616b'}>
        <DrawerCloseButton />
        <VStack spacing={4}>
          <Heading marginTop={10}>{role?.toUpperCase()} CONTENT</Heading>
          <HStack>
            {user.value.role === 'Admin' ? (
              <AdminOptions />
            ) : user.value.role === 'Patient' ? (
              <Heading>Patient</Heading>
            ) : user.value.role === 'Docter' ? (
              <Heading>Docter</Heading>
            ) : (
              <Heading>No Role Found!!</Heading>
            )}
          </HStack>
        </VStack>
        <DrawerFooter>
          <Button onClick={onLogout} variant={'outline'}>
            Log Out
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
