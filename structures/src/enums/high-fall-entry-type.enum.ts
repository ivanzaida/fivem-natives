export enum EHighFallEntryType {
	HighfallInAir, // Standard behaviour. Pitches forward in the direction of movement (standard behaviour when a ped is warped into the air and dropped)
	HighfallVault, // not for use by script
	HighfallFromCarHit, // Normally used when then ped has been hit by a car and falls off.
	HighfallSlopeSlide, // Used when the ped activates from an animated slide down a slope.
	HighfallTeeterEdge, // Will make the ped teeter in the direction of movement (as if at an edge). Best used for knocking peds off of the edge of buildings from standing / etc.
	HighfallSprintExhausted, // Equivalent to fainting from running out of energy
	HighfallStuntJump, // Equivalent to the in air stunt jump activation (i.e. pressing circle / B whilst jumping)
}