import Photo from "../../assets/subSkills.jpg";

const SubSkills = () => {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen max-w-none border-y-2 border-zinc-500">
      <div className="absolute bg-gradient-to-r from-black/50 to-black/30 opacity-50 w-full h-full"></div>
      <img src={Photo} alt="Sub Skills Image" />
    </div>
  );
};

export default SubSkills;
