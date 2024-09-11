export enum EIkControlFlags {
	AikNone, // No Ik control during the task
	AikDisableLegIk, // Disable leg ik during the task
	AikDisableArmIk, // Disable arm ik during the task
	AikDisableHeadIk = 4, // Disable head ik during the task
	AikDisableTorsoIk = 8, // Disable torso ik during the task
	AikDisableTorsoReactIk = 16, // Disable torso react ik during the task
	AikUseLegAllowTags = 32, // Use anim leg allow tags to determine when leg ik is enabled
	AikUseLegBlockTags = 64, // Use anim leg block tags to determine when leg ik is disabled
	AikUseArmAllowTags = 128, // Use anim arm allow tags to determine when ik is enabled
	AikUseArmBlockTags = 256, // Use anim arm block tags to determine when ik is disabled
	AikProcessWeaponHandGrip = 512, // Process the left hand weapon grip ik during the task
	AikUseFpArmLeft = 1024, // Use first person ik setup for left arm (cannot be used with AIK_DISABLE_ARM_IK)
	AikUseFpArmRight = 2048, // Use first person ik setup for right arm (cannot be used with AIK_DISABLE_ARM_IK)
	AikDisableTorsoVehicleIk = 4096, // Disable torso vehicle ik during the task
	AikLinkedFacial = 8192, // Searches the dictionary of the clip being played for another clip with the _facial suffix to be played as a facial animation.
}