import React, { useEffect, useState } from 'react';
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
  Button,
  FormControl,
  Text
} from '@chakra-ui/react';

function App() {
  const password = "cb488f5ec8c2bf653af957c72f1120fd1305713aaee1374d8ad7d579212e81f3";
  const [passwordMatched, setPasswordMatched] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const handleChange = (event: any) => setPasswordValue(event.target.value);
  const cancelRef = React.useRef<any>();

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
                <Input
                  value={passwordValue}
                  onChange={handleChange}
                  pr='4.5rem'
                  type={false ? 'text' : 'password'}
                  onKeyUp={event => {
                    if (event.key === 'Enter') {
                      checkPassword();
                    }
                  }}
                  placeholder='Password' />
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
        "asdsa"
      }
    </div>
  );
}

export default App;
