/**
 * NETWORK:NETWORK_SET_TALKER_PROXIMITY
 *
 * 0x1D9E253CF963B125

 * 
 * Sets the distance threshold that determines how close a player must be before we can chat with him. This does
 * not account for height. That can be set with NETWORK_SET_TALKER_PROXIMITY_HEIGHT below
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} distance
 */
export function networkSetTalkerProximity(distance: number): void {
	const networkSetTalkerProximity_result = Citizen.invokeNative<void>('0x1D9E253CF963B125', distance);
	return networkSetTalkerProximity_result;
}