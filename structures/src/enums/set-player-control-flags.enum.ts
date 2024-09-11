export enum ESetPlayerControlFlags {
	SpcNone, // No flags set
	SpcAmbientScript = 2, // whether this was called by an ambient script
	SpcClearTasks = 4, // also clears the player's taks
	SpcRemoveFires = 8, // removes fires in the vicinity of the player
	SpcRemoveExplosions = 16, // removes explosions in the vicinity of the player
	SpcRemoveProjectiles = 32, // removes all projectiles
	SpcDeactivateGadgets = 64, // deactivates all the player's gadgets
	SpcReenableControlOnDeath = 128, // re-enables the player's controls if they die whilst not under control
	SpcLeaveCameraControlOn = 256, // Leaves the camera control on when disabling player control (Off by default if removing player control, turned back on when resuming control)
	SpcAllowPlayerDamage = 512, // Allow the player to be damaged even if his control is turned off.
	SpcDontStopOtherCarsAroundPlayer = 1024, // Tells nearby vehicles to stop moving or get out of the way
	SpcPreventEverybodyBackoff = 2048, // Prevent everybody from backing off when player controls are disabled
	SpcAllowPadShake = 4096, // Allows pad to rumble
}