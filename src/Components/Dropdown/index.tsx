

interface DropdownProps {
  utmType: string,
  setUtmType: (type: string) => void;
}


export default function Dropdown({utmType ,setUtmType}: DropdownProps) {

  return (
    <div className="p-4 rounded-lg w-full">
      <label htmlFor="filter" className="text-gray-300">
        Filtrar por:
      </label>
      <select
        id="filter"
        value={utmType}
        onChange={(e) => setUtmType(e.target.value)}
        className="w-full p-4 bg-gray-800 text-white border border-gray-600 rounded-lg  focus:outline-none cursor-pointer"
      >
        <option value="source">Origem do Tráfego</option>
        <option value="medium">Meio do Tráfego</option>
        <option value="campaign">Campanha UTM</option>
        <option value="channel">Canal UTM</option>

      </select>
    </div>
  );
}
