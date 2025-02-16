import CustomCheckbox from "../CustomCheckbox";

export default function HistoryItem({content = ""}) {
    return (
        <div className="w-full h-16 border-tn_yellow border-2 bg-[#F9FAFB] flex justify-between items-center p-2">
            <p className="text-tn_yellow font-bold text-xl">{content}</p>
            <CustomCheckbox />
        </div>
    )
}