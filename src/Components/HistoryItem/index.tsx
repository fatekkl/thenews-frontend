import CustomCheckbox from "../CustomCheckbox";

interface HistoryItemProps {
  content: string;
}

export default function HistoryItem({ content = "" }: HistoryItemProps) {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
      <p className="text-tn_brown font-medium">{content}</p>
      <CustomCheckbox />
    </div>
  );
}
