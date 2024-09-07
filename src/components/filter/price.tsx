import { useSearchParams } from "react-router-dom"
import { GenderProps } from "./gender"
import { useEffect } from "react"
import { useDebounce } from "@uidotdev/usehooks"

const Price = ({ selected, setSelected }: GenderProps) => {

    const [params, setParams] = useSearchParams()

    //* selected state ine debounce işlemi uyguladık
    const debounceValue = useDebounce(selected, 300)

    useEffect(() => {
        if (Number(debounceValue) > 0) {
            params.set("price", debounceValue)
        } else {
            params.delete("price")
        }

        setParams(params)


    }, [debounceValue])

    return (
        <div>
            <h2 className="mb-4 font-semibold">Fiyat</h2>

            <input value={selected} onChange={(e) => setSelected(e.target.value)} className="w-full" type="range" min={0} max={1000} />

            <div className="flex justify-between font-open font-semibold">
                <span>${selected}</span>
                <span>$1000</span>
            </div>
        </div>
    )
}

export default Price