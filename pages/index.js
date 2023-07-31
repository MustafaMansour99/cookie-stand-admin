import { useState } from "react";
import { useAuth } from "@/contexts/auth";
import LoginForm from "@/components/LoginForm";

import Home from "@/components/Home";

export default function Allinfo() {
  // const [result,setResult] = useState([])

  const { user } = useAuth()


  return (
    
      <>
        {user ? (
          <>
            <Home />
          </>
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </>
 
  )
}