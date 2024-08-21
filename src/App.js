import './App.css';
import React, { useState, useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min"
import * as THREE from "three";
import {Box, Button, TextField, Typography} from "@mui/material"
import { firestore } from './firebase';
import { collection, getDocs, query, getDoc, updateDoc, setDoc, doc, deleteDoc } from "firebase/firestore";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const [message, setMessage] = useState('')

  const sendMessage = async () => {
    if (!message.trim()) return;
    console.log("entered")
    const docRef = doc(collection(firestore, 'emails'), message)
    const docSnap = await(getDoc(docRef))

    if (!docSnap.exists()){
      await setDoc(docRef, {email: message})
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          // minHeight: 600,
          // maxHeight: 750.0,
          // minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // color: 0x318f96,
  // size: 1.60,
          // backgroundColor: 0xd28938
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div class="fullscreen" ref={vantaRef}>
        {/* <h1> Welcome </h1> */}
        <Box
          sx={{
            // padding:4,
            margin: 'margin-left',

            padding: 20,
            height:1/2,
            width:1/2,
          }}
        >
          
          <Typography sx={{color:"white", fontSize: 40, paddingY:3}}>Interview Prep</Typography>
          {/* do the thing where it types out a word letter by letter for the nervous, stressed, confident */}
          <Typography sx={{color:"white", fontSize: 30, paddingY:1}}>Nervous? Stressed? Not Confident? We have you covered</Typography>
          <Typography sx={{color:"white", fontSize: 20, paddingY:2}}>InterviewAI analzes your facial expressions as well as body language and gives you tips on how to nail your next interview!</Typography>
          <TextField
            label="email"
            variant="outlined"
            color="warning"
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{
              '& .MuiInputBase-root': {
                height: '43px', // Adjust the height
              },
              
              input: { color: 'white' }, // Text color
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Outline color
                },
                '&:hover fieldset': {
                  borderColor: 'pink', // Outline color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', // Outline color when focused
                },
              },
              label: { color: 'white' }, // Label color
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white', // Label color when focused
              },
            }}
          ></TextField>
          <Button
          variant="contained" size="large" onClick={sendMessage}>Waitlist!</Button>
        </Box>
    </div>

  );
}

export default App;
