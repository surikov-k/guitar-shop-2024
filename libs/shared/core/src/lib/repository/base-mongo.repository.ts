import { NotFoundException } from '@nestjs/common';
import { Document, Model } from 'mongoose';

import { Entity, EntityIdType } from './entity.interface';
import { Repository } from './repository.interface';

export abstract class BaseMongoRepository<
  EntityType extends Entity<EntityIdType>,
  DocumentType extends Document
> implements Repository<EntityType> {

  protected constructor(
    protected readonly model: Model<DocumentType>,
    private readonly createEntity: (document: DocumentType) => EntityType,
  ) {}

  protected createEntityFromDocument(document: DocumentType): EntityType | null {
    if (! document) {
      return null;
    }
    return this.createEntity(
      {
        ...document.toObject({ versionKey: false }),
        id: document._id.toString(),
      }
    );
  }

  public async findById(id: EntityType['id']): Promise<EntityType | null> {
    const document = await this.model.findById(id).exec();
    return this.createEntityFromDocument(document);
  }

  public async save(entity: EntityType): Promise<EntityType> {
    const newEntity = new this.model(entity.toPlainObject());
    await newEntity.save();

    entity.id = newEntity._id.toString();
    return entity;
  }

  public async update(id: EntityType['id'], entity: EntityType): Promise<EntityType> {
    const updatedDocument = await this.model.findByIdAndUpdate(
      id,
      entity.toPlainObject(),
      { new: true, runValidators: true }
    )
      .exec();

    if (! updatedDocument) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }

    return entity;
  }

  public async deleteById(id: EntityType['id']): Promise<void> {
    const deletedDocument = await this.model.findByIdAndDelete(id).exec();
    if (! deletedDocument) {
      throw new NotFoundException(`Entity with id ${id} not found.`);
    }
  }
}
