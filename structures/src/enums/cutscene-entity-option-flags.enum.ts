export enum ECutsceneEntityOptionFlags {
	CeoNone,
	CeoPreserveFaceBloodDamage, // If specified, leave facial blood decals when the cutscene starts. These are removed by default.
	CeoPreserveBodyBloodDamage, // If specified, leave body damage decals when the cutscene starts. By default these are reduced, but not completely removed
	CeoRemoveBodyBloodDamage = 4, // If specified, body damage decals will be completely cleared (instead of just reduced) when the cutscene starts
	CeoCloneDamageToCsModel = 8, // If specified, if you have a reposition only entity, then any damage is cloned from that to the animated entity
	CeoResetCapsuleAtEnd = 16, // If specified, the character's capsule will be reset so that it is vertical at the end of cutscenes.
	CeoIsCascadeShadowFocusEntityDuringExit = 32, // If specified, this entity will be used as the focus for the cascade shadow system during seamless exits.  Required when characters get into vehicles at the end of cutscenes.
	CeoIgnoreModelName = 64, // If specified, force the cutscene to animate the registered ped using the given scene handle, even if the model name doesn't match.
	CeoPreserveHairScale = 128, // If specified, the characters hair scale is frozen when the cutscene starts.
	CeoInstantHairScaleSetup = 256, // If specified, the characters hair scale will snap to it's new value when the cutscene starts, otherwise it will lerp.
	CeoDontResetPedCapsule = 512,
	CeoUpdateAsRealDoor = 1024,
}