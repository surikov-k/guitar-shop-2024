import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUserPayload = createParamDecorator(
  (data: undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return {
      id: request.user['sub'] as string,
      email: request.user['email'] as string,
      name: request.user['name'] as string,
    };
  }
);
