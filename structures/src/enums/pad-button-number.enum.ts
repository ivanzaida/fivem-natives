export enum EPadButtonNumber {
	Leftstickx,
	Leftsticky,
	Rightstickx,
	Rightsticky,
	Leftshoulder1,
	Leftshoulder2,
	Rightshoulder1,
	Rightshoulder2,
	Dpadup,
	Dpaddown,
	Dpadleft,
	Dpadright,
	Start,
	Select,
	Square,
	Triangle,
	Cross,
	Circle,
	Leftshock, // (LEFTSHOULDER3 / the PS3 pad left nipple press)
	Rightshock, // (RIGHTSHOULDER3 / the PS3 pad right nipple press)
	NoButtonPressed = 9999, // this was added for using funtions that return a PAD_BUTTON_NUMBER, do not pass this value into any pad commands
}