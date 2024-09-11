export enum EClimbState {
	CsNotClimbing,
	CsClimbing, // CS_CLIMBING means the ped is climbing, or valuting
	CsHanging, // CS_HANGING means that the ped is hanging from an edge and is ready to use a shimmy task.
	CsShimmyingLeft,
	CsShimmyingRight,
}