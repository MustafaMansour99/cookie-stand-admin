import { hours } from '../Data'
import { cities } from '../Data'
import { Totals } from '../Data'


export default function ReportTable() {


    return (
        <div className="flex items-center justify-center m-5">

            <table className='text-center'>
                
                <thead>
                    <tr>
                        {hours.map(element => (
                            <th className='p-4 bg-green-600'>{element}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>

                    {cities.map((i) => (
                        <>
                            <tr className=' bg-green-300'>
                                {i.map(e => (
                                    <td className='border border-black '>{e}</td>
                                ))}
                            </tr>
                        </>
                    ))}


                </tbody>

                <tfoot>

                    <tr className=' bg-green-400' >
                        {Totals.map(a => (

                            <td className='border border-black '>{a}</td>
                        ))}
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}