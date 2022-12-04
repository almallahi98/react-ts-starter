import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"



export const App = () => (
  
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/"/>
    </Routes>
  </ChakraProvider>
)
