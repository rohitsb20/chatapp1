

export default function GenderCheckbox({ onCheckboxChange, selectedGender }) {
  return (
        <div>
       <label className="block text-sm font-medium text-gray-700 mb-1">
         Gender
       </label>
       <div className="flex space-x-4">
         <div className="flex items-center">
           <input
             id="male"
             name="gender"
             type="radio"
             value="male"
             checked={selectedGender === "male"}
             onChange={() => onCheckboxChange("male")}
             className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
           />
           <label
             htmlFor="male"
             className={`ml-2 block text-sm text-gray-900 ${
               selectedGender === "male" ? "selected" : ""
             }`}
           >
             Male
           </label>
         </div>
         <div className="flex items-center">
           <input
             id="female"
             name="gender"
             type="radio"
             value="female"
             checked={selectedGender === "female"}
             onChange={() => onCheckboxChange("female")}
             className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
           />
           <label
             htmlFor="female"
             className={`ml-2 block text-sm text-gray-900 ${
               selectedGender === "male" ? "selected" : ""
             }`}
           >
             Female
           </label>
         </div>
       </div>
     </div>
     );
}
