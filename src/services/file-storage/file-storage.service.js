import {ref, uploadBytes, getDownloadURL, deleteObject} from 'firebase/storage';

class FileStorage {
  constructor({storage}) {
    this.storage = storage;
    this.fileDir = 'file/';
  }

  async uploadFile(file) {
    const fileRef = ref(this.storage, `${this.fileDir}${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    return {
      url,
      name: file.name,
    };
  }

  deleteFile(name) {
    const fileRef = ref(this.storage, `${this.fileDir}${name}`);
    return deleteObject(fileRef)
        .catch((e) => {
          console.log(e);
        });
  }
}

export {FileStorage};
