import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

class Collection {
  constructor({db, collectionName}) {
    this.collectionRef = collection(db, collectionName);
    this.db = db;
    this.collectionName = collectionName;
  }

  getAll() {
    return getDocs(this.collectionRef)
        .then(this._mapSnapshotToArray);
  }

  getById(id) {
    const docRef = doc(this.db, this.collectionName, id);
    return getDoc(docRef)
        .then(this._mapSnapshotToObject);
  }

  create(payload) {
    return addDoc(this.collectionRef, payload);
  }

  update(id, payload) {
    const docRef = doc(this.db, this.collectionName, id);
    return updateDoc(docRef, payload);
  }

  delete(id) {
    const docRef = doc(this.db, this.collectionName, id);
    return deleteDoc(docRef);
  }

  _mapSnapshotToArray(snapshot) {
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  _mapSnapshotToObject(snapshot) {
    return snapshot.data();
  }
}

export {Collection};
