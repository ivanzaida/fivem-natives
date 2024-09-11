export enum EEnterExitVehicleFlags {
	EcfResumeIfInterrupted = 1, // If the task is interupted (bumped, shot), dont resume.
	EcfWarpEntryPoint, // Warps ped to entry point ready to open the door/enter seat
	EcfJackAnyone = 8, // Jack the ped occupying the vehicle, regardless of relationship status
	EcfWarpPed = 16, // Warp the ped onto the vehicle
	EcfDontWaitForVehicleToStop = 64, // Dont wait for the vehicle to stop before exiting
	EcfDontCloseDoor = 256, // Dont close the vehicle door
	EcfWarpIfDoorIsBlocked = 512, // Allow ped to warp to the seat if entry is blocked
	EcfJumpOut = 4096, // Jump out of the vehicle
	EcfDontDefaultWarpIfDoorBlocked = 65536, // TASK_LEAVE_ANY_VEHICLE auto defaults the ECF_WARP_IF_DOOR_IS_BLOCKED, set this flag to not set that
	EcfUseLeftEntry = 131072, // Use entry/exit point on the left hand side
	EcfUseRightEntry = 262144, // Use entry/exit point on the right hand side
	EcfJustPullPedOut = 524288, // When jacking just pull the ped out, but don't get in
	EcfBlockSeatShuffling = 1048576, // Disable shuffling - forces ped to use direct door only
	EcfWarpIfShuffleLinkIsBlocked = 4194304, // Allow ped to warp if the shuffle link to that seat is blocked by someone
	EcfDontJackAnyone = 8388608, // Never jack anyone when entering/exiting
	EcfWaitForEntryPointToBeClear = 16777216, // Wait for our entry point to be clear of peds before exiting
}