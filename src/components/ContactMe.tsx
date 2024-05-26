import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="mt-auto mb-4 text-center">
      <h3 className="mb-2 text-2xl">Contact Me</h3>
      <div className="flex justify-center gap-4 text-2xl text-white">
        <Link href={"mailto:saadalamgir18@gmail.com"} target="_blank">
          <IoMdMail className="text-white" />
        </Link>
        <Link href={"https://github.com/saadalamgir18"} target="_blank">
          <FaGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/saad-alamgir/"}
          target="_blank"
        >
          <IoLogoLinkedin />
        </Link>
        {/* <Link href={""} target="_blank">
          <FaCode />
        </Link> */}
      </div>
    </div>
  );
};

export default ContactMe;
