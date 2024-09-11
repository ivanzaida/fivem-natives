export enum EPlacementFlag {
	Map, // only used in MP. This is used for pickups that are created locally on each machine and only networked when collected.
	Fixed, // sets the pickup as fixed so it cannot move
	Regenerates, // sets the pickup as regenerating
	SnapToGround, // places the pickup on the ground
	OrientToGround, // orientates the pickup correctly on the ground
	LocalOnly, // creates the pickup non-networked
	BlippedSimple, // gives the pickup a simple blip
	BlippedComplex, // gives the pickup a complex blip
	Upright, // Some pickups need to be orientated differently to lie on the ground properly. Use this flag if your pickup is not lying correctly.
	Rotate, // Pickup will rotate
	Faceplayer, // Pickup will always face the player
	HideInPhotos, // Pickup will be hidden when the player is using the phone camera
	PlayerGift, // The pickup is being dropped as a gift to another player
	OnObject, // The pickup is lying on an object and probes for that when snapping or orientating to ground
	GlowInTeam, // Set pickups to glow even if pickup can't be picked up because of team checks
	PlacementCreationFlagAutoEquip, // if set on a weapon pickup, it will auto equip the picked up weapon. It will ignore autoswap logic
	PlacementCreationFlagCollectableInVehicle, // if set the pickup can be collected by a ped in a vehicle
	PlacementCreationFlagDisableWeaponHdModel, // if set the weapon pickup will render SD model only (HD<->SD model switch will be disabled)
	PlacementCreationFlagForceDeferredModel, // if set the pickup will render as deferred model (no transparency/alpha blending in this render mode)
}