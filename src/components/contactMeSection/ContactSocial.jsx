import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/tusharrohilla11/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/tusharrohilla11" Icon={FiGithub} />
      
    </div>
  );
};

export default ContactSocial;