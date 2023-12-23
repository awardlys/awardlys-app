import { awards } from "@/data/awards";
import { table } from "console";


export function Table() {
    return (
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-slate-800">
                    <th className="p-3">Titulo</th>
                    <th className="p-3">Subtitulo</th>
                    <th className="p-3">Criação</th>
                    <th className="p-3">Atualização</th>
                    <th >Status</th>
                </tr>
            </thead>
            <tbody>
                {awards.map(item => (
                    <tr key={item.id} className="text-gray-800 bg-gray-400 border-b border-gray-600">
                        <td className="flex p-3 items-center">{item.title}</td>
                        <td>{item.subTitle}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>
                        <td>
                            {item.status && <div className="px-2 py-1 inline-block rounded-md border-green-800 bg-green-600 text-white text-xs">Ativo</div>}
                            {!item.status && <div className="px-2 py-1 inline-block rounded-md border-red-800 bg-red-600 text-white text-xs">Expirado</div>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
} 