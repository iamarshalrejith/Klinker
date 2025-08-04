const GenderCheckbox = () => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="block text-black text-sm mb-1">Gender</label>
      <div className="flex items-center space-x-4">
        <label className="flex items-center text-black text-sm">
          <input
            type="radio"
            name="gender"
            value="male"
            className="mr-2"
          />
          Male
        </label>
        <label className="flex items-center text-black text-sm">
          <input
            type="radio"
            name="gender"
            value="female"
            className="mr-2"
          />
          Female
        </label>
        <label className="flex items-center text-black text-sm">
          <input
            type="radio"
            name="gender"
            value="other"
            className="mr-2"
          />
          Other
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
