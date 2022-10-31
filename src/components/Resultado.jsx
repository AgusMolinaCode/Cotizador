import { Fragment,useCallback, useMemo, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import {MARCAS ,PLANES} from '../constants'

const Resultado = () => {
    
    const { resultado ,datos } = useCotizador()
    const  { marca, plan, year} = datos
    const yearRef = useRef(year)

    const [nombreMarca] = useMemo( () => MARCAS.filter(m => m.id === Number(marca)),[resultado])
    const [nombrePlan] = useMemo( () => PLANES.filter(p => p.id === Number(plan)),[resultado])

  
    if (resultado === 0) {
        return null
    }

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow-xl font-0">
            <h2 className="text-lime-800 font-0 text-3xl">Resumen</h2>

            <p className="my-2 text-2xl">
                <span className="font-bold text-2xl text-gray-600">Marca seleccionada: </span>
                {nombreMarca.nombre}
            </p>

            <p className="my-2 text-2xl">
                <span className="font-bold text-2xl text-gray-600">Plan seleccionado: </span>
                {nombrePlan.nombre}
            </p>

            <Fragment>
                <p className="my-2 text-2xl">
                    <span className="font-bold text-2xl text-gray-600">Año del auto: </span>
                    {yearRef.current}
                </p>
            </Fragment>

            <p className="my-2 text-3xl">
                <span className="font-bold text-gray-600">Total Cotizacion: </span>
                {resultado}
            </p>

        </div>
  )
}

export default Resultado