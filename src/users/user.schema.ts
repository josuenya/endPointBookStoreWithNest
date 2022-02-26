import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type UserDocument = User & Document;

export class UserPhoneNumber {
  phone_number: string;

  method_code?: string;
}

@Schema()
export class User {
  id?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  active: boolean;

  @Prop()
  balance: number;

  @Prop([
    raw({
      phone_number: { type: String },
      method_code: { type: String },
      date: { type: String },
    }),
  ])
  accounts: UserPhoneNumber[];
}

export const UserSchema = SchemaFactory.createForClass(User);
