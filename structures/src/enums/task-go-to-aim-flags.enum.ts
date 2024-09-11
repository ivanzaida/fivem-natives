export enum ETaskGoToAimFlags {
	GoToAimNone,
	GoToAimAtGotoCoordIfTargetLosBlocked, // If our target is a ped and our LOS is blocked, we'll try aiming at the go to coord
}