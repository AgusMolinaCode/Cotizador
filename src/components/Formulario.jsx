import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {
  
    const {datos,handleChangeDatos, error, setError, cotizarSeguro} = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        cotizarSeguro()

    }
  
    return (
    <>
        
        

        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label htmlFor="marca" className="block mb-3 font-0 text-3xl text-gray-400 uppercase">
                    Marca
                </label>
                <select name="marca" id="" className="w-full font-0 text-2xl bg-whiteborder border-gray-300" onChange={ e => handleChangeDatos(e)} value={datos.marca}>
                    <option value="">-- Selecciones Marca --</option>

                    {MARCAS.map(marca => (
                        <option value={marca.id} key={marca.id}>
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="año" className="block mb-3 font-0 font-bold text-3xl text-gray-400 uppercase">
                    Año
                </label>
                <select name="year" id="" className="w-full font-0 bg-whiteborder text-2xl border-gray-300" onChange={ e => handleChangeDatos(e)} value={datos.year}>
                    <option value="year">-- Selecciones año --</option>

                    {YEARS.map(year => (
                        <option value={year} key={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="año" className="block mb-3 font-0 font-bold text-3xl text-gray-400 uppercase">
                    Elige un Plan
                </label>
                
                <div className="flex gap-3 font-0 text-2xl items-center">
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor="">
                                {plan.nombre}
                            </label>
                            <input type="radio" name="plan" value={plan.id} onChange={ e => handleChangeDatos(e)}/>
                        </Fragment>
                    ))}
                </div>
            </div>

            <input type="submit" value="Cotizar" className="w-full font-0 text-2xl bg-emerald-500 hover:bg-emerald-700 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-lg" />

        </form>
        {error && <Error />}
    </>
  )
}

export default Formulario