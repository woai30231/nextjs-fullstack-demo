import sendRes from '@server/_/functions/sendRes';

import type { HTTP_STATUSES } from '@server/_/constants';
import type { NextResponse } from 'next/server';
import type { ValueOf } from 'type-fest';

export type SendError = (
  message: string,
  statusCode: ValueOf<typeof HTTP_STATUSES>,
) => NextResponse;

const sendError: SendError = (message, statusCode) => sendRes(undefined, statusCode, { message });

export default sendError;
