import { IntRef, FloatRef } from '@ivanzaida/structures'

/**
 * PATHFIND:GENERATE_DIRECTIONS_TO_COORD
 *
 * 0x766E7B4FEF97CFDE

 * 
 * Performs a path search, and attempts to identify the next direction which needs to be taken to follow the route to the target
 * 
 * p3 is 0 in the only game script occurrence (trevor3) but 1 doesn't seem to make a difference
 * 
 * distToNxJunction seems to be the distance in metres  10.0f
 * 
 * direction:
 * 0 = This happens randomly during the drive for seemingly no reason but if you consider that this native is only used in trevor3, it seems to mean "Next frame, stop whatever's being said and tell the player the direction."
 * 1 = Route is being calculated or the player is going in the wrong direction
 * 2 = Please Proceed the Highlighted Route
 * 3 = In (distToNxJunction) Turn Left
 * 4 = In (distToNxJunction) Turn Right
 * 5 = In (distToNxJunction) Keep Straight
 * 6 = In (distToNxJunction) Turn Sharply To The Left
 * 7 = In (distToNxJunction) Turn Sharply To The Right
 * 8 = Route is being recalculated or the navmesh is confusing. This happens randomly during the drive but consistently at {2044.0358, 2996.6116, 44.9717} if you face towards the bar and the route needs you to turn right. In that particular case, it could be a bug with how the turn appears to be 270 deg. CCW instead of "right." Either way, this seems to be the engine saying "I don't know the route right now."
 * 
 * return value set to 0 always
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} destinationX
 * @param {number} destinationY
 * @param {number} destinationZ
 * @param {number} flags
 * @param {IntRef} directions [Ref]
 * @param {IntRef} streetNameHash [Ref]
 * @param {FloatRef} approxDistance [Ref]
 * @returns {number}  
 */
export function generateDirectionsToCoord(destinationX: number, destinationY: number, destinationZ: number, flags: number, directions: IntRef /* ptr */, streetNameHash: IntRef /* ptr */, approxDistance: FloatRef /* ptr */): number {
	const generateDirectionsToCoord_result = Citizen.invokeNative<number>('0x766E7B4FEF97CFDE', destinationX, destinationY, destinationZ, flags, directions.dataView, streetNameHash.dataView, approxDistance.dataView);
	return generateDirectionsToCoord_result;
}