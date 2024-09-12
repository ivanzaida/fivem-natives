/**
 * TASK:ASSISTED_MOVEMENT_OVERRIDE_LOAD_DISTANCE_THIS_FRAME
 *
 * 0x118744F545022B3E

 * 
 * ------------------------------------------------------------------
 * @param {number} distance
 */
export function assistedMovementOverrideLoadDistanceThisFrame(distance: number): void {
	const assistedMovementOverrideLoadDistanceThisFrame_result = Citizen.invokeNative<void>('0x118744F545022B3E', distance);
	return assistedMovementOverrideLoadDistanceThisFrame_result;
}