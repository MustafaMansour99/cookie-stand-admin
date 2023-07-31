import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ReportTable from "../components/Report_Table"
import { useState } from "react";


export default function Home() {
  const [result,setResult] = useState([])
  return (

    
  <>
  

    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
    
    <Header />
    {result && (
        <div className="p-5">
          <h2 className="text-2xl font-bold">Last Created Cookie Stand:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    <Main  result ={result} setResult ={setResult}/>
    {

      result.length == 0 ? (
        <h1 className="flex items-center justify-center text-5xl m-5"> No cookie stand available </h1>
        ) : (
          
          <ReportTable result ={result} />
          )
        }
    <Footer result ={result}/>

  </>
  )

}