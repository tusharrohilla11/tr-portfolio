import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="tusharrohilla1121@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8287920675" Image={FiPhone} />
      <SingleInfo text="Delhi, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;