/**
 * STATS:STAT_GET_CHALLENGE_FLYING_DIST
 *
 * 0x3D70C45F9F077E0A

 * 
 * Fly low to the ground for the longest distance
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetChallengeFlyingDist(): number {
	const statGetChallengeFlyingDist_result = Citizen.invokeNative<number>('0x3D70C45F9F077E0A', );
	return statGetChallengeFlyingDist_result;
}