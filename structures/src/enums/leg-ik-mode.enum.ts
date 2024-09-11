export enum ELegIkMode {
	LegIkOff, // No leg IK at all, totally controlled by animation
	LegIkPartial, // Default for non-player peds. Ground position at feet is inferred from standing capsule
	LegIkFull, // Physics probes are done at feet to find exact ground position
	LegIkFullMelee, // Physics probes are done at feet to find exact ground position with support for melee
}