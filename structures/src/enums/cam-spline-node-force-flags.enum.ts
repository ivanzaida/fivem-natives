export enum ECamSplineNodeForceFlags {
	CamSplineNodeForceNone,
	CamSplineNodeForceLinear, // Do linear interpolation between this node and the next.
	CamSplineNodeForceCut, // Do not interpolate to next node, cut to it.
	CamSplineNodeForcePause = 4, // Force camera to pause before starting this node.
	CamSplineNodeForceLevel = 8, // Force look at entity offset to be level with camera position.
}