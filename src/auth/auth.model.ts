import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema({ timestamps: true })
export class Auth {
  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;

  @Prop({ type: Date, required: true })
  time: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
