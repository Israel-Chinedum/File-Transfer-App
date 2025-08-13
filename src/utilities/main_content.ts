//Export MainContent

import type { fileMetaData } from "../Types&Interfaces";

//=====================================================================//

export const mainContent = ({ setFiles }: { setFiles: any }) => {
  const read = (fileInput: any) => {
    if (fileInput) {
      fileInput.onchange = (e: any) => {
        const files = e.target.files as FileList;
        const fileArr: File[] = [];

        Array.from(files).forEach((file: File) => {
          fileArr.push(file);
        });

        files.length && setFiles(fileArr);
      };
    }
  };
  return { read };
};
