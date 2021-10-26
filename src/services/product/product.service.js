import {Collection} from '../collection/collection.service';

class Product extends Collection {
  constructor({db, fileStorage}) {
    super({
      db,
      collectionName: 'product',
    });

    this.fileStorage = fileStorage;
  }

  async createProduct(payload) {
    try {
      const {image} = payload;
      const imgUrl = await this.fileStorage.uploadFile(image);
      console.log(image);
      await this.create({
        imgUrl,
      });
    } catch (e) {
      console.log(e);
    };
  }
}

export {Product};
