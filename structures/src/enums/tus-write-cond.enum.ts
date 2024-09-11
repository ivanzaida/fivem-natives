export enum ETusWriteCond {
	TusOpetypeNotEqual, // Write if variable is not equal to the current value
	TusOpetypeGreaterThan, // Write if variable is greater than the current value
	TusOpetypeGreaterOrEqual, // Write if variable is greater than or equal to the current value
	TusOpetypeLessThan, // Write if variable is less than the current value
	TusOpetypeLessOrEqual, // Write if variable is equal to or less than the current value
}