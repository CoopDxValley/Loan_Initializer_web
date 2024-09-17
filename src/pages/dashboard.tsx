import { useState } from "react"
import { GoCheckCircleFill, GoCircle } from "react-icons/go"

const RequirementItem = ({ Requirement }: { Requirement: string }) => {
    return (
        <div className="flex gap-2">
            <img src="/assets/Check.svg" alt="check iicon" />
            <span>{Requirement}</span>
        </div>
    )
}

const BusinessSelection = () => {
    const [loanIntentions, setLoanIntentions] = useState(["Growing my business", "Growing my business", "Growing my business", "Growing my business"])
    const [selectedIdx, setSelectedIdx] = useState<number[]>([1])

    return <div className="w-full flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-2 select-none">
        {loanIntentions.map((item, idx) => (
            <div className="sm:w-56 flex items-center justify-between px-4 py-4 gap-4 border-2 sm:relative">
                <img src="/assets/Business-icon.png" className="w-8" alt="" />
                <span>{item}</span>
                {selectedIdx.indexOf(idx) === -1 ?
                    <GoCircle className="cursor-pointer sm:absolute sm:top-2 sm:right-2 text-3xl sm:text-xl" onClick={() => { setSelectedIdx([...selectedIdx, idx]) }} /> : <GoCheckCircleFill className="cursor-pointer sm:absolute sm:top-2 sm:right-2 text-3xl sm:text-xl" color="00adef" onClick={() => { setSelectedIdx(selectedIdx.filter(i => i !== idx)) }} />}
            </div>
        ))}
    </div>
}
export default function Dashboard() {
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="w-full flex flex-col px-6 sm:px-20 gap-8 py-4">
                <div className="flex sm:justify-center ">
                    <div className="flex flex-col items-start gap-1 sm:gap-2">
                        <span className="font-bold text-xl sm:text-2xl">To get a loan you need to be:</span>
                        <RequirementItem Requirement="18+ years" />
                        <RequirementItem Requirement="Permanent resident or citizen of ET" />
                        <RequirementItem Requirement="Earning a stable income" />
                    </div>
                </div>
                <span className="font-black text-4xl">Hi Adugna!</span>
                <div className="flex flex-col sm:items-center px-6 border-2 pt-6 pb-12 gap-4">
                    <span className="font-bold text-2xl">How much would you like to borrow?</span>
                    <span className="border-2 text-center w-full sm:w-fit py-2 sm:px-16 font-bold text-[#206EEE] text-2xl">$70000</span>
                    <span>$2,000 to $70,000 - $25 increments</span>
                </div>
                <div className="flex flex-col gap-8">
                    <span className="font-bold text-2xl">What will you use the money for?</span>
                    <BusinessSelection />
                </div>
                <div className="w-full flex justify-center">
                    <button className="bg-[#1C5BC2] rounded-full text-white py-1 px-12 font-bold text-xl">Proceed</button>
                </div>
            </div>
        </div>
    )
}