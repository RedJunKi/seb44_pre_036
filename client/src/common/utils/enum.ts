const BASE_URL = 'https://2d14-220-127-158-194.ngrok-free.app';

export enum MembershipUrl {
  GoogleGsiClient = 'https://accounts.google.com/gsi/client',
  SignUp = `${BASE_URL}/members`,
  Login = `${BASE_URL}/auth/login`,
  GetMe = `${BASE_URL}/members/me`,
  Withdrawal = `${BASE_URL}/members/delete`,
}
