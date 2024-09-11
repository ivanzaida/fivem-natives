export enum ETaskRappelDownWallState {
	RappelStateInvalid = -1, // The ped isn't currently running this task
	RappelStateClimbingWall = 1, // Playing the initial climb intro animation
	RappelStateIdle = 3, // Not moving or jumping, just hanging idle
	RappelStateIdleAtDestinationZ, // At the lowest point allowed and waiting to smash the window
	RappelStateDescending, // Moving down
	RappelStateJumping, // Jumping outwards (can also be moving down based on player stick input)
	RappelStateSmashingwindow, // Playing the window smash animation
}