export enum ECoverpointHeight {
	CovheightLow, // < 1.4m Will crouch behind and fire over the top
	CovheightHigh, // <Unused
	CovheightToohigh, // >= 2.0m Must spin left or right to fire depending on WALL_TO_LEFT or WALL_TO_RIGHT COVERPOINT_USAGE
}