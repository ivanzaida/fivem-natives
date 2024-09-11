export enum ESyncedScenePlaybackFlags {
	SyncedSceneNone,
	SyncedSceneUsePhysics, // When this flag is set, the task will run in kinematic physics mode (other entities will collide, and be pushed out of the way)
	SyncedSceneTagSyncOut, // when this flag is set, the task will do a tag synchronized blend out with the movement behaviour of the ped.
	SyncedSceneDontInterrupt = 4, // When this flag is set, the scene will not be interrupted by ai events like falling, entering water / etc. Also blocks all weapon reactions / etc
	SyncedSceneOnAbortStopScene = 8, // When this flag is set, the scene will be stopped if this task is aborted
	SyncedSceneAbortOnWeaponDamage = 16, // When this flag is set, the task will end if the ped takes weapon damage
	SyncedSceneBlockMoverUpdate = 32, // When this flag is set, the task will not update the mover
	SyncedSceneLoopWithinScene = 64, // When this flag is set, the tasks with anims shorter than the scene will loop while the scene is playing
	SyncedScenePreserveVelocity = 128, // When this flag is set, the task will preserve it's velocity on clean up (must be using physics)
	SyncedSceneExpandPedCapsuleFromSkeleton = 256, // When this flag is set, the task will apply the CPED_RESET_FLAG_ExpandPedCapsuleFromSkeleton flag to the ped
	SyncedSceneActivateRagdollOnCollision = 512, // When this flag is set, the ped will switch to ragdoll and fall down on making contact with a physical object (other than flat ground)
	SyncedSceneHideWeapon = 1024, // When this flag is set, the ped's weapon will be hidden while the scene is playing
	SyncedSceneAbortOnDeath = 2048, // When this flag is set, task will end if the ped dies, even if the SYNCED_SCENE_DONT_INTERRUPT flag is set.
	SyncedSceneVehicleAbortOnLargeImpact = 4096, // When running the scene on a vehicle, allow the scene to abort if the vehicle takes a heavy collision from another vehicle
	SyncedSceneVehicleAllowPlayerEntry = 8192, // When running the scene on a vehicle, allow player peds to enter the vehicle
	SyncedSceneProcessAttachmentsOnStart = 16384, // When this flag is set, process the attachments at the start of the scene
	SyncedSceneNetOnEarlyNonPedStopReturnToStart = 32768, // When this flag is set, a non-ped entity will be returned to their starting position if the scene finishes early
	SyncedSceneSetPedOutOfVehicleAtStart = 65536, // When this flag is set, The ped will be set out of his vehicle when the task starts.
	SyncedSceneNetDisregardAttachmentChecks = 131072, // When this flag is set, the attachment checks done in CNetworkSynchronisedScenes
}