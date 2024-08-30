import {
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  useToast,
  Button,
  Heading,
  Center,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import {
  AtSignIcon,
  CalendarIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import { MdOutlinePassword } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { BiSolidBabyCarriage } from "react-icons/bi";
import { pageContext } from "../../context/pageContext";
import { LinkButton } from "../../components";

const SuperAdminSignup = () => {
  const [show, setShow] = useState(false);
  // cradentials
  const [role, setRole] = useState("Patient");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  // context api
  const { setPage } = useContext(pageContext);

  // toast setup
  const toast = useToast();

  // functions
  const handleClick = () => setShow(!show);

  const handleSubmit = async () => {
    if (
      role === "" ||
      name === "" ||
      email === "" ||
      phoneNumber === "" ||
      password === "" ||
      confirmPassword === "" ||
      username === "" ||
      dob === "" ||
      age === 0 ||
      age === "" ||
      gender === ""
    ) {
      toast({
        title: "Error",
        description: "Please fill all the fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Creating Account",
      description: "We're creating your account.",
      status: "loading",
      duration: 9000,
      isClosable: true,
    });
    await window.api
      .signup({
        role,
        name,
        email,
        phoneNumber,
        password,
        confirmPassword,
        username,
        dob,
        age,
        gender,
      })
      .then((response) => {
        console.log(response);
        toast.closeAll();
        toast({
          title: "Account Created!!",
          description: response.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setPage("Login");
      })
      .catch((error) => {
        toast.closeAll();
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  // component
  return (
    <Center
      width={"100%"}
      height={"100vh"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"scroll"}
      scrollBehavior={"smooth"}
    >
      <Heading as={"h1"} mb={4} size={"xl"}>
        Signup
      </Heading>
      <Stack
        width={80}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={6}
      >
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={"text"}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <IoMdPerson />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={"number"}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <FaPhone />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={"number"}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Age"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <BiSolidBabyCarriage />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={"date"}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Enter Date of birth"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <CalendarIcon />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={"text"}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <IoMdPerson />
          </InputLeftElement>
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <AtSignIcon />
          </InputLeftElement>
        </InputGroup>
        <RadioGroup width={"100%"} onChange={setGender} value={gender}>
          Gender:
          <Stack paddingLeft={10} spacing={5} direction="row">
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Stack>
        </RadioGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <InputRightElement width="2.5rem">
            <Button h="2rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
          <InputLeftElement width="2.5rem">
            <MdOutlinePassword />
          </InputLeftElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter Confirm password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="2.5rem">
            <Button h="2rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
          <InputLeftElement width="2.5rem">
            <MdOutlinePassword />
          </InputLeftElement>
        </InputGroup>
        <RadioGroup width={"100%"} onChange={setRole} value={role}>
          Role:
          <Stack paddingLeft={10} spacing={5} direction="row">
            <Radio value="Patient">Patient</Radio>
            <Radio value="Admin">Admin</Radio>
          </Stack>
        </RadioGroup>
        <Button colorScheme={"blue"} onClick={handleSubmit}>
          Sign Up
        </Button>
        <Stack mt={4}>
          <Center>
            Already have an account?{" "}
            <LinkButton colorScheme={"red"}>SuperAdminLogin</LinkButton>
          </Center>
        </Stack>
      </Stack>
    </Center>
  );
};

export default SuperAdminSignup;
