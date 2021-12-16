export interface IRegisterForm {
	email: string
	password: string
	repeat_password: string
	username: string
	two_factor_authentication: boolean
}

export interface ILoginForm {
	email: string
	password: string
}
