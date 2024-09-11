export enum ECamSplineNodeFlags {
	CamSplineNodeNoFlags,
	CamSplineNodeSmoothRot, // Additional smoothing is applied to the transition in orientation between the previous node and the specified node. This smoothing can reduce the appearance of discontinuities at the nodes, but may not be desirable where a linear transition is required.
	CamSplineNodeSmoothLensParams, // Additional smoothing is applied to the transition in lens paramaters, such as FOV and motion blur strength, between the previous node and the specified node. This smoothing can reduce the appearance of discontinuities at the nodes, but may not be desirable where a linear transition is required.
	CamSplineNodeEaseIn = 4, // Per-node ease in
	CamSplineNodeEaseOut = 8, // Per-node ease out
	CamSplineNodeEaseInout = 16, // Per-node ease in and out
}