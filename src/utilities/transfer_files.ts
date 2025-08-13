import { Socket } from 'socket.io-client';

export const transferFiles = async (files: File[], socket: Socket) => {
  
  //NUMBER OF FILES SENT as nfs
  let nfs = 0;  

  let fn = 0;
  let offset = 0;
  let size = 64 * 1024;
  let file: File;

  // socket.emit('readyState');

  const getChunk = (file: File) => {
    let chunk;
    const chunkSize = offset + size;
    chunk = file.slice(offset, chunkSize);
    offset += chunk.size
    return chunk;
  }

  const sendChunk = async () => {
    file = files[fn];
    const readChunk = () => {
      return new Promise((resolve, reject) => {
        const chunk = getChunk(file)
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('An error occured while chunking file'));
        reader.readAsArrayBuffer(chunk);
      })
    }
    
    if(offset < file.size){
      try{   
        const buffer = await readChunk(); 
        console.log('Buffer: ', buffer);
        socket.emit('chunk', { buffer });
      } catch (error: unknown) {
        if(error instanceof Error) throw Error(error.message);
        return new Error('Error: Unknown!');
      }
    } else {
      const chunkData = {
        name: file.name,
        size: file.size,
        type: file.type,
        ended: true,
      }
      socket.emit('chunk', chunkData);
      fn++;
      offset = 0;
      console.log(`Successfully sent ${fn} ${fn > 1 ? 'files' : 'file'}`);
    }

  }


  while(fn < files.length){
    try {
      await sendChunk();
    } catch(error: unknown){
      if(error instanceof Error) return console.log(error.message);
      console.log('Error: Unknown!');
    }
  }

















};
