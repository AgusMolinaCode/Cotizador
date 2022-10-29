import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const { error } = useCotizador()
   
    return (
    <div className="border text-center border-red-400 bg-red-400 p-3 mt-3 text-black rounded-lg font-bold uppercase text-md ">
        <p>{error}</p>
    </div>
    )
}

export default Error