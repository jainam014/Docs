import { MdDriveFileRenameOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  const [sentence, setSentence] = useState(data.desc);
  const [isDescEditable, setIsDescEditable] = useState(false);
  const [checkKeyDownEvent, setCheckKeyDownEvent] = useState(false);

  useEffect(() => {
    if (isDescEditable) {
        setCheckKeyDownEvent(true)
    }
  }, [isDescEditable]);

  const handleBtnClick = () => {
    setIsDescEditable((prev) => !prev);
  };

  const handleSentenceChange = (event) => setSentence(event?.target?.value);

  const handleKeyDownEvent = (event) => {
    if(checkKeyDownEvent) {
        setSentence('')
    }
    setCheckKeyDownEvent(false)
  }

  return (
    <>
      <motion.div
        drag dragConstraints={reference}
        className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-800/80 text-white px-8 py-10 overflow-hidden"
      >
        <FaRegFileAlt />

        <div className="flex justify-between items-end">
          {isDescEditable ? (
            <input
              type="text"
              value={sentence}
              className={`w-full mt-2 bg-zinc-600 rounded-[10px] px-[8px]`}
              onChange={(event) => handleSentenceChange(event)}
              onKeyDown={(event) => handleKeyDownEvent(event)}
            />
          ) : (
            <p className="text-sm mt-5 leading-tight font-medium">{sentence}</p>
          )}

          <button className="btn" onClick={handleBtnClick}>
            <MdDriveFileRenameOutline />
          </button>
        </div>

        <div className="footer absolute bottom-0 left-0  w-full ">
          <div className="flex justify-between items-center mb-2 px-8 py-3 ">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdClose />
              ) : (
                <LuDownload size=".8em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 flex items-center justify-center bg-blue-500`}
            >
              <h3 className="text-sm ">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
