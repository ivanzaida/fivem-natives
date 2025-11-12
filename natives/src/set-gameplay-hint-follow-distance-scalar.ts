/**
 * CAM:SET_GAMEPLAY_HINT_FOLLOW_DISTANCE_SCALAR
 *
 * 0x39723B4B969CC059

 * 
 * Call at the start of the hint to avoid pops.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} distanceScalar
 */
export function setGameplayHintFollowDistanceScalar(distanceScalar: number): void {
	const setGameplayHintFollowDistanceScalar_result = Citizen.invokeNative<void>('0x39723B4B969CC059', distanceScalar);
	return setGameplayHintFollowDistanceScalar_result;
}