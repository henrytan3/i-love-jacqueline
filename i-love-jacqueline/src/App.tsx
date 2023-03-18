import React, { useState } from 'react';
import './App.css';
import sha256 from 'crypto-js/sha256';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Input,
  InputRightElement,
  Button,
  FormControl,
  Text,
  InputGroup
} from '@chakra-ui/react';
import Home from './components/Home';

function App() {
  document.title = "I love Jacqueline!";
  const password = "cb488f5ec8c2bf653af957c72f1120fd1305713aaee1374d8ad7d579212e81f3";
  const [passwordMatched, setPasswordMatched] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const handleChange = (event: any) => setPasswordValue(event.target.value);
  const cancelRef = React.useRef<any>();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => setShowPassword(!showPassword);

  const checkPassword = () => {
    const passwordHashed = sha256(passwordValue).toString();
    if (passwordHashed === password) {
      setPasswordMatched(true);
    }
    else if (passwordValue !== password) {
      setPasswordIncorrect(true);
    }
  }

  return (

    <div className="App">
      <AlertDialog
        isOpen={!passwordMatched}
        leastDestructiveRef={cancelRef}
        onClose={() => { }}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Enter Password
            </AlertDialogHeader>
            <AlertDialogBody>
              <FormControl isRequired>
                <InputGroup>
                <Input
                  value={passwordValue}
                  onChange={handleChange}
                  pr='4.5rem'
                  type={showPassword ? 'text' : 'password'}
                  onKeyUp={event => {
                    if (event.key === 'Enter') {
                      checkPassword();
                    }
                  }}
                  placeholder='Password' />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' 
                            size='sm'
                            onClick={handleShowPasswordClick}>{showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                  </InputGroup>
                {passwordIncorrect &&
                  <Text color='red'>
                    Password is incorrect
                  </Text>
                }
              </FormControl>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={checkPassword}>
                Enter
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      {passwordMatched &&
        <Home />
      }
    </div>
  );
}

export default App;
