
export interface IAuthState {
    isLogged: boolean,
    authError: string | null
}

export type FormProps = {
    email: string;
    password: string;
    remember?: boolean;
  }