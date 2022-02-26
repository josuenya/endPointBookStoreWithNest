import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@Schema()
@ObjectType()
@Schema()
export class Item {
  @Field()
  @Prop({ required: 'veillez entrer le nom' })
  name: string;

  @Field()
  @Prop({ required: 'veillez entrez la quantite' })
  qty: number;

  @Field()
  @Prop({ required: 'Entrez la description' })
  description: string;
}
export const ItemSchema = SchemaFactory.createForClass(Item);
