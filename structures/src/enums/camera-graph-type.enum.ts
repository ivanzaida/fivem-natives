export enum ECameraGraphType {
	GraphTypeLinear, // simple linear motion
	GraphTypeSinAccelDecel, // accelerates at start, decelerates at end
	GraphTypeAccel, // Just Acceleration
	GraphTypeDecel, // Just Deceleration
	GraphTypeSlowIn,
	GraphTypeSlowOut,
	GraphTypeSlowInOut,
	GraphTypeVerySlowIn,
	GraphTypeVerySlowOut,
	GraphTypeVerySlowInSlowOut,
	GraphTypeSlowInVerySlowOut,
	GraphTypeVerySlowInVerySlowOut,
	GraphTypeEaseIn,
	GraphTypeEaseOut,
	GraphTypeQuadraticEaseIn,
	GraphTypeQuadraticEaseOut,
	GraphTypeQuadraticEaseInOut,
	GraphTypeCubicEaseIn,
	GraphTypeCubicEaseOut,
	GraphTypeCubicEaseInOut,
	GraphTypeQuarticEaseIn,
	GraphTypeQuarticEaseOut,
	GraphTypeQuarticEaseInOut,
	GraphTypeQuinticEaseIn,
	GraphTypeQuinticEaseOut,
	GraphTypeQuinticEaseInOut,
	GraphTypeCircularEaseIn,
	GraphTypeCircularEaseOut,
	GraphTypeCircularEaseInOut,
	GraphTypeMax, // The maximum number of graph types, do not use.
}