export enum ECamSplineSmoothingFlags {
	CamSplineNoSmooth, // no smoothing just moves at a constant rate
	CamSplineSlowInSmooth, // Decelerates when approaching a node
	CamSplineSlowOutSmooth, // Accelerates slowly when leaving a node
	CamSplineSlowInOutSmooth, // Decelerates when approaching a node and accelerates slowly when leaving a node
	CamSplineVerySlowIn,
	CamSplineVerySlowOut,
	CamSplineVerySlowInSlowOut,
	CamSplineSlowInVerySlowOut,
	CamSplineVerySlowInVerySlowOut,
	CamSplineEaseIn,
	CamSplineEaseOut,
	CamSplineQuadraticEaseIn,
	CamSplineQuadraticEaseOut,
	CamSplineQuadraticEaseInOut,
	CamSplineCubicEaseIn,
	CamSplineCubicEaseOut,
	CamSplineCubicEaseInOut,
	CamSplineQuarticEaseIn,
	CamSplineQuarticEaseOut,
	CamSplineQuarticEaseInOut,
	CamSplineQuinticEaseIn,
	CamSplineQuinticEaseOut,
	CamSplineQuinticEaseInOut,
	CamSplineCircularEaseIn,
	CamSplineCircularEaseOut,
	CamSplineCircularEaseInOut,
}