import React, { FC } from "react";

interface filePreviewProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FilePreview: FC<filePreviewProps> = ({ file, setFile }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-x-[10px] items-center">
        {/* video file thumbnail */}
        <div className="w-[40px] h-[30px] bg-[#C4C4C4]"></div>
        {/* video file name  */}
        <p>{file && file["name"]}</p>
      </div>
      <div className="flex gap-x-5 items-center">
        {/* video file size */}
        <p className="text-base">
          {file && (file["size"] / 1000000).toFixed(2)} MB
        </p>
        {/* close button */}
        <div onClick={() => setFile(null)} className="cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0ZM10 8.78714L7.67714 6.46429C7.51631 6.30345 7.29817 6.2131 7.07071 6.2131C6.84326 6.2131 6.62512 6.30345 6.46429 6.46429C6.30345 6.62512 6.2131 6.84326 6.2131 7.07071C6.2131 7.29817 6.30345 7.51631 6.46429 7.67714L8.78714 10L6.46429 12.3229C6.38465 12.4025 6.32148 12.497 6.27838 12.6011C6.23528 12.7051 6.2131 12.8167 6.2131 12.9293C6.2131 13.0419 6.23528 13.1534 6.27838 13.2575C6.32148 13.3615 6.38465 13.4561 6.46429 13.5357C6.54392 13.6154 6.63847 13.6785 6.74252 13.7216C6.84657 13.7647 6.95809 13.7869 7.07071 13.7869C7.18334 13.7869 7.29486 13.7647 7.39891 13.7216C7.50296 13.6785 7.59751 13.6154 7.67714 13.5357L10 11.2129L12.3229 13.5357C12.4025 13.6154 12.497 13.6785 12.6011 13.7216C12.7051 13.7647 12.8167 13.7869 12.9293 13.7869C13.0419 13.7869 13.1534 13.7647 13.2575 13.7216C13.3615 13.6785 13.4561 13.6154 13.5357 13.5357C13.6154 13.4561 13.6785 13.3615 13.7216 13.2575C13.7647 13.1534 13.7869 13.0419 13.7869 12.9293C13.7869 12.8167 13.7647 12.7051 13.7216 12.6011C13.6785 12.497 13.6154 12.4025 13.5357 12.3229L11.2129 10L13.5357 7.67714C13.6154 7.59751 13.6785 7.50296 13.7216 7.39891C13.7647 7.29486 13.7869 7.18334 13.7869 7.07071C13.7869 6.95809 13.7647 6.84657 13.7216 6.74252C13.6785 6.63847 13.6154 6.54392 13.5357 6.46429C13.4561 6.38465 13.3615 6.32148 13.2575 6.27838C13.1534 6.23528 13.0419 6.2131 12.9293 6.2131C12.8167 6.2131 12.7051 6.23528 12.6011 6.27838C12.497 6.32148 12.4025 6.38465 12.3229 6.46429L10 8.78714Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
