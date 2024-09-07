import { useSearchParams } from "react-router-dom"
import { numbers } from "../../utils/constants"
import { useEffect } from "react"

export type FilterProps = {
    selected: string[]
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
}

const Size = ({ selected, setSelected }: FilterProps) => {

    const [params, setParams] = useSearchParams()

    //* state her değiştiğinde url deki parametreleri güncelle
    useEffect(() => {
        if (selected.length > 0) {
            // seçili elemanları url e ekle (, koy)
            params.set("size", selected.join(","))
        } else {
            // seçili eleman yoksa parametreyi kaldır
            params.delete("size")
        }

        //* url i güncelle
        setParams(params)

    }, [selected])

    //* üzerine tıklanılan seçeneği, state te yoksa ekle varsa kaldır
    const toggle = (num: string) => {
        const found = selected.includes(num)

        if (!found) {
            setSelected([...selected, num])
        } else {
            setSelected(selected.filter((i) => i !== num))
        }
    }

    return (
        <div className="lg:mt-5">
            <h2 className="mb-4 font-semibold">Numara</h2>

            <div className="grid grid-cols-5 gap-4">
                {numbers.map((num) => {

                    //* numara seçili mi
                    const found = selected.includes(num)

                    return (
                        <p onClick={() => toggle(num)} className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 ${found ? "bg-black text-white" : "bg-white"
                            }`}>
                            {num}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default Size