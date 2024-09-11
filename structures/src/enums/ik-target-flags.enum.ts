export enum EIkTargetFlags {
	ItfDefault,
	ItfArmTargetWrtHandbone, // arm target relative to the handbone
	ItfArmTargetWrtPointhelper, // arm target relative to the pointhelper
	ItfArmTargetWrtIkhelper = 4, // arm target relative to the ikhelper
	ItfIkTagModeNormal = 8, // use animation tags directly
	ItfIkTagModeAllow = 16, // use animation tags in ALLOW mode
	ItfIkTagModeBlock = 32, // use animation tags in BLOCK mode
	ItfArmUseOrientation = 64, // solve for orientation in addition to position
}