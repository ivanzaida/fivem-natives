export enum ECameraType {
	CamtypeScripted = 26379945,
	CamtypeScriptedFly = 4292966205, // An in-game fly camera designed for use in the mission creator
	CamtypeAnimated = 964613260,
	CamtypeTransition = 3484689037,
	CamtypeSplineDefault = 180543640, // smoothed and velocity constrained spline, not continous velocity
	CamtypeSplineTimed = 1775630800, // smoothed and velocity constrained spline, not continous velocity
	CamtypeSplineRounded = 457439121, // rounded spline with continous velocity
	CamtypeSplineSmoothed = 4175434708, // smoothed spline with continous velocity
	CamtypeSplineTimedCustom = 1665938388, // smoothed and velocity constrained spline, not continous velocity, custom speeds can be set
}