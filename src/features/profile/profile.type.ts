/* Get Profile API */

export type GetProfileInput = unknown;

export interface GetProfileOutput {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
}
