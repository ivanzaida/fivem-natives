export enum ERagdollBlockingFlags {
	RbfNone,
	RbfBulletImpact,
	RbfVehicleImpact,
	RbfFire = 4,
	RbfElectrocution = 8,
	RbfPlayerImpact = 16, // Blocks ragdoll activation from any impact with a ped (player characters running into the ped, or active ragdolls colliding with them)
	RbfExplosion = 32,
	RbfImpactObject = 64,
	RbfMelee = 128,
	RbfRubberBullet = 256,
	RbfFalling = 512,
	RbfWaterJet = 1024,
	RbfDrowning = 2048,
	RbfAllowBlockDeadPed = 4096, // allow blocking of ragdoll activation for dead peds (by default dead peds' ragdolls are allowed to activate regardless of how these flags have been set)
	RbfPlayerBump = 8192, // Blocks ragdoll activation from an animated player running into the character (but not from collisions with other ragdolls)
	RbfPlayerRagdollBump = 16384, // Blocks ragdoll activation from a ragdolling player colliding with the character (but not from animated player bumps or collisions with active non-player ragdolls)
	RbfPedRagdollBump = 32768, // Blocks ragdoll activation from a ragdolling non-player colliding with the character (but not from any collisions with players, ragdolling or otherwise)
	RbfVehicleGrab = 65536, // Blocks ragdoll activation from grabbing a vehicle door whilst it pulls away
}