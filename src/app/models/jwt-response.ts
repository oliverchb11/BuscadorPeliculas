export interface JwtResponse {
  dateUser: {
    id: number;
    name: string;
    email: string;
    accesToken: string;
    expiresIn: string;
  };
}
