/* eslint-disable react/prop-types */
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
  FormLabel,
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
import img from "../../assets/imgs/groupofStudent.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const SuperAdminSignup = () => {
  const [show, setShow] = useState(false);
  // cradentials
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [dob, setDob] = useState("");
  // const [age, setAge] = useState(0);
  // const [gender, setGender] = useState("");

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    username: "",
    dob: "",
    age: 0,
    gender: "",
  });

  // context api
  const { setPage } = useContext(pageContext);

  // toast setup
  const toast = useToast();

  // functions
  const handleClick = () => setShow(!show);

  const handleSubmit = async () => {
    console.log(credentials);
    const isVerify = verifycredentials(credentials, toast);
    console.log("isVerify", isVerify);
  };

  useGSAP(() => {
    gsap.to(".myInputGroup", {
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    });
  });

  // component
  return (
    <Center
      width={"100%"}
      height={"100vh"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundImage={img}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      overflow={"scroll"}
      overflowX={"hidden"}
      overflowY={"auto"}
      scrollBehavior={"smooth"}
    >
      <Stack
        width={"max-content"}
        justifyContent={"center"}
        padding={"2rem"}
        backdropFilter={"blur(2px) "}
        alignItems={"center"}
        // spacing={6}
        borderRadius={"7px"}
        borderTopRightRadius={"60px"}
        borderBottomLeftRadius={"60px"}
        overflow={"hidden"}
        className="myInputGroup"
        opacity={0}
        border={"none"}
        boxShadow={
          "9px 66px 75px 25px rgba(0,0,6,.5),0px 45px 26px 0px rgba(0,0,0,0.14)"
        }
      >
        <Heading
          textAlign={"center"}
          // color={"rgb(37, 190, 128, 1)"}
          as={"h1"}
          className="myInputGroup"
          opacity={0}
          textStyle={"bold"}
          textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          mb={4}
          size={"xl"}
        >
          Signup As <br /> Super Admin
        </Heading>
        <MyInputGroup>
          <Input
            pr="4.5rem"
            type={"text"}
            onChange={(e) =>
              setCredentials({ ...credentials, name: e.target.value })
            }
            placeholder="Enter Name"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <IoMdPerson />
          </InputLeftElement>
        </MyInputGroup>
        <MyInputGroup>
          <Input
            pr="4.5rem"
            type={"number"}
            onChange={(e) =>
              setCredentials({ ...credentials, phoneNumber: e.target.value })
            }
            placeholder="Enter Phone Number"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <FaPhone />
          </InputLeftElement>
        </MyInputGroup>
        <MyInputGroup>
          <Input
            pr="4.5rem"
            type={"number"}
            onChange={(e) =>
              setCredentials({ ...credentials, age: e.target.value })
            }
            placeholder="Enter Age"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <BiSolidBabyCarriage />
          </InputLeftElement>
        </MyInputGroup>
        <MyInputGroup>
          <Input
            pr="4.5rem"
            type={"date"}
            onChange={(e) =>
              setCredentials({ ...credentials, dob: e.target.value })
            }
            placeholder="Enter Date of birth"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <CalendarIcon />
          </InputLeftElement>
        </MyInputGroup>
        <MyInputGroup>
          <Input
            pr="4.5rem"
            type={"text"}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            placeholder="Enter Username"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <IoMdPerson />
          </InputLeftElement>
        </MyInputGroup>
        <MyInputGroup>
          <Input
            pr="4.5rem"
            type={"email"}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            placeholder="Enter Email"
            required={true}
          />
          <InputLeftElement width="2.5rem">
            <AtSignIcon />
          </InputLeftElement>
        </MyInputGroup>
        <RadioGroup
          bgColor={"white"}
          color={"black"}
          width={"100%"}
          className="myInputGroup"
          onChange={(e) => {
            console.log(e);
            setCredentials({ ...credentials, gender: e });
          }}
          opacity={0}
          borderRadius={5}
          p={3}
        >
          <FormLabel>Gender:</FormLabel>
          <Stack paddingLeft={10} spacing={5} direction="row">
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Stack>
        </RadioGroup>
        <MyInputGroup>
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            required={true}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
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
        </MyInputGroup>
        <MyInputGroup>
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter Confirm password"
            required={true}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                confirmPassword: e.target.value,
              })
            }
          />
          <InputRightElement width="2.5rem">
            <Button h="2rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
          <InputLeftElement width="2.5rem">
            <MdOutlinePassword />
          </InputLeftElement>
        </MyInputGroup>
        <Button
          colorScheme={"blue"}
          className="myInputGroup"
          opacity={0}
          mt={4}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Stack className="myInputGroup" opacity={0} mt={4}>
          <Center fontWeight={"bold"} color={"white"}>
            <p>Already have an account?</p>
            <br />
            <LinkButton colorScheme={"red"}>SuperAdminLogin</LinkButton>
          </Center>
        </Stack>
      </Stack>
    </Center>
  );
};

export default SuperAdminSignup;

const MyInputGroup = ({ children }) => {
  return (
    <InputGroup
      className="myInputGroup"
      opacity={0}
      size="md"
      borderRadius={5}
      bgColor={"white"}
    >
      {children}
    </InputGroup>
  );
};

const verifycredentials = (credentials, toast) => {
  for (const key in credentials) {
    console.log(key, credentials[key]);

    if (
      credentials[key] === "" ||
      credentials[key] === 0 ||
      credentials[key] === null ||
      credentials[key] === undefined
    ) {
      toast({
        title: "Error",
        description: "Please fill all the fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    } else if (
      key === "password" &&
      credentials[key].length < 8 &&
      credentials[key] !== ""
    ) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    } else if (
      key === "confirmPassword" &&
      credentials[key] !== credentials.password &&
      credentials[key] !== ""
    ) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    } else if (
      key === "email" &&
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(credentials[key])
    ) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }
  }
  return true;
};
