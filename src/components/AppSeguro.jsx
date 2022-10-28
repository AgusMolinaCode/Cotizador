import Formulario from "./Formulario"


const AppSeguro = () => {
  
  
  
  return (
    <>
        <header className="my-10">
            <h1 className="text-white font-0 text-center text-3xl md:text-5xl">Cotizador de Seguros de Auto</h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-xl rounded-xl p-10 ">
            <Formulario />
        </main>
    </>
  )
}

export default AppSeguro