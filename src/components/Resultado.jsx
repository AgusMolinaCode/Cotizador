import useCotizador from "../hooks/useCotizador"
import {MARCAS ,PLANES} from '../constants'

const Resultado = () => {
    
    const { resultado ,datos } = useCotizador()
    const  { marca, plan, year} = datos
  
    if (resultado === 0) {
        return null
    }

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow-xl">
            <h2 className="text-lime-800 font-0 text-3xl">Resumen</h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {marca}
            </p>
        </div>
  )
}

export default Resultado