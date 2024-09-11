export enum EEnavScriptFlags {
	EnavDefault,
	EnavNoStopping, // Will ensure the ped continues to move whilst waiting for the path to be found, and will not slow down at the end of their route
	EnavAdvSlideToCoordAndAchieveHeadingAtEnd, // ENAV_SLIDE_TO_COORD_AND_ACHIEVE_HEADING_AT_END. Performs a slide-to-coord at the and of the task. This requires that the accompanying NAVDATA structure has the 'm_fSlideToCoordHeading' member set correctly
	EnavGoFarAsPossibleIfTargetNavmeshNotLoaded = 4, // If the navmesh is not loaded in under the target position, then this will cause the ped to get as close as is possible on whatever navmesh is loaded.  The navmesh must still be loaded at the path start
	EnavAllowSwimmingUnderwater = 8, // Will allow navigation underwater - by default this is not allowed
	EnavKeepToPavements = 16, // Will only allow navigation on pavements.  If the path starts or ends off the pavement, the command will fail.  Likewise if no pavement-only route can be found even although the start and end are on pavement
	EnavNeverEnterWater = 32, // Prevents the path from entering water at all
	EnavDontAvoidObjects = 64, // Disables object-avoidance for this path.  The ped may still make minor steering adjustments to avoid objects, but will not pathfind around them
	EnavAdvancedUseMaxSlopeNavigable = 128, // Specifies that the navmesh route will only be able to traverse up slopes which are under the angle specified in the m_fMaxSlopeNavigable member of the accompanying NAVDATA structure
	EnavStopExactly = 512, // undefined Peds will always attempt to stop exactly, unless the new flag ENAV_SUPPRESS_EXACT_STOP is specified.. ENAV_STOP_EXACTLY will do nothing, and at some point will be removed
	EnavAccurateWalkrunStart = 1024, // The entity will look ahead in its path for a longer distance to make the walk/run start go more in the right direction. Especially useful when ped start from inside an object boundaries. But has to be used carefully, the ped might be more prone to walk into things during the walk/runstart with this flag set
	EnavDontAvoidPeds = 2048, // Disables ped-avoidance for this path while we move
	EnavDontAdjustTargetPosition = 4096, // If target pos is inside the boundingbox of an object it will otherwise be pushed out. TO BE USED WITH EXTREME CAUTION!!! Only if asked specificly to use this
	EnavSuppressExactStop = 8192, // Turns off the default behaviour, which is to stop exactly at the target position. Occasionally this can cause footsliding/skating problems
	EnavAdvancedUseClampMaxSearchDistance = 16384, // Prevents the path-search from finding paths outside of this search distance. This can be used to prevent peds from finding long undesired routes. The value 'm_fClampMaxSearchDistance' must be set in the accompanying NAVDATA structure, and this value must be between 1 and 255 (corresponds to game units). The seach area is limited to an axis aligned box containing a sphere of the given radius
	EnavPullFromEdgeExtra = 32768, // Pulls out the paths from edges at corners for a longer distance, to prevent peds walking into stuff. This could in rare cases generate bigger quirks in the paths so use only when it is necessary
}