import { useState } from "react"
import { colors } from "../../utils/constants"
import { DetailProps } from "./Head"

const Color = ({ data }: DetailProps) => {

    const [sColors, setSColors] = useState<string>("")

    const toggle = (id: string) => {

        //* seçili olana mı tıklandı
        const same = sColors === id

        //* farklı renge tıklansıysa state i değiştir
        if (!same) {
            setSColors(id)
        } else {

            //* aynı renge tıklandıysa seçimi kaldır
            setSColors("")
        }
    }

    console.log(sColors)

    return (
        <div>
            <h2 className="font-semibold mb-3">Renkler</h2>

            <div className="flex gap-5">
                {data.color.split(",").map((id) => {
                    const color = colors.find((i) => i.id == id)
                    const isSelected = sColors === id

                    return (
                        <div
                            className={`p-1 
                            ${isSelected && "ring ring-blue rounded-full"}`}
                        >
                            <div
                                onClick={() => toggle(id)}
                                style={{ background: color?.code }}
                                className="size-8 rounded-full cursor-pointer"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Color