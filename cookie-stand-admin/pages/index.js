import Head from "next/head";
export default function Home() {
  return (
    <>
  <Head>
    <title>Cookie Stand Admin</title>
  </Head>
  <body>
    <Header />
    <Main />
    <Footer />
  </body>
  </>
  )
}
function Header(){
  return(
  <header className="flex items-center pl-10 bg-green-500 h-36">
      <h1 className="text-5xl font-bold">Cookie Stand Admin</h1>
    </header>
    )
  }
function Main(){
  function cookie(event) {
    event.preventDefault();
    alert(event.target.location.value)
    // # the "location" is the name that i passed in the input to print for me the value that i enterd insied location form
}
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <form className="flex flex-col items-center justify-center w-auto h-auto p-10 bg-green-300"  onSubmit={cookie} >
          <h1 className="p-5 text-4xl font-bold">Create Cookie Stand</h1>
          <div>
            <div className="flex justify-around">
              <label className="text-3xl " >Location</label>
              <input className="w-11/12 mx-auto" type="text" name="location" ></input>
            </div>
            <div className="flex p-5">
              <div className="flex flex-col p-5">
                <label className="text-2xl">Minimum Customers per Hour</label>
                <input type="number" ></input>
              </div>
              <div className="flex flex-col p-5">
                <label className="text-3xl ">Maximum Customers per Hour</label>
                <input type="number" ></input>
              </div>
              <div className="flex flex-col p-5">
                <label className="text-3xl ">Average Cookies per Sale</label>
                <input type="number"></input>
              </div>
              <button className="flex items-center justify-center p-5 text-3xl  bg-green-600" type="submit">Create</button>
            </div>
          </div>
        </form>
        <p className="p-10 text-3xl "> Report Table Coming Soon...</p>
      </main>
    )
}
function Footer() {
  return (
    <>
    <footer className="flex items-center pl-10 bg-green-500 h-36">
      <h1 className="flex text-3xl justify-center ">&copy;2023</h1>
    </footer>
    </>
  )
}










