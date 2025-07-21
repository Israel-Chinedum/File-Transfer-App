export const transferFiles = (files: any) => {
  const file = files[0];

  //   console.log("name: ", file.name);
  //   console.log("size: ", file.size);

  const reader = new FileReader();

  reader.onload = (e) => {
    const result = e.target?.result;
    // const chunkSize = 64 * 1024;
    console.log("NAME: ", e.target);
    if (result instanceof ArrayBuffer) {
      //   console.log(result.byteLength);
      console.log(result);
    }
  };

  reader.readAsArrayBuffer(files);
};
