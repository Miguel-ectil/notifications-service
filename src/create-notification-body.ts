import { IsNotEmpty, Length } from 'class-validator';

export class CreateNotificationBody {
  //   @IsUUID()
  @IsNotEmpty()
  recipientId: string;
  @IsNotEmpty()
  @Length(5, 240)
  content: string;
  @IsNotEmpty()
  category: string;
}
