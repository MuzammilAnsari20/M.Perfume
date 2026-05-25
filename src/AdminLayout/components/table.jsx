import axios from "axios";
import { useEffect } from "react";

function Table({data, setData, columns, endpoint, actions = [] }) {
    

    useEffect(() => {
        axios.get(endpoint).then((res) => { setData(res.data) });
    }, [endpoint]);

    return (
        <>


            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-[6px]">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                        <tr>
                            {columns.map((col, index) =>
                                <th key={col.key} scope="col" className={`px-6! py-3! font-medium bg-[#d533f9] ${index < columns.length - 1 ? "border-r-2" : ""}`}>
                                    {col.lable}
                                </th>
                            )}
                            <th scope="col" className="px-6! py-3! font-medium bg-[#d533f9]">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (


                            <tr key={row._id ?? rowIndex} className={`border-b border-default ${row.is_read === 0 ? 'bg-[#f8e5ff] font-bold text-black' : 'bg-neutral-primary-soft'}`}>
                                {columns.map((col, colIndex) => (
                                    colIndex === 0 ? (
                                        <th key={col.key} scope="row" className="px-6! py-4! font-medium text-heading whitespace-nowrap">
                                            {row[col.key]}
                                        </th>
                                    ) : (
                                        <td key={col.key} className="px-6! py-4! font-medium text-heading whitespace-nowrap">
                                            {row[col.key]}
                                        </td>
                                    )
                                ))}
                                <td className="px-6! py-4! text-right flex justify-center gap-4">
                                    {actions.map((action, index) => (
                                        (!action.showIf || action.showIf(row)) && (
                                            <button key={index} className="font-medium text-fg-brand hover:underline cursor-pointer" onClick={() => action.onClick(row)}>{action.label}</button>
                                        )
                                    ))}
                                </td>


                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Table;