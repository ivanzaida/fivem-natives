/**
 * CAM:REPLAY_GET_MAX_DISTANCE_ALLOWED_FROM_PLAYER
 *
 * 0x37A742571A01BD01

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function replayGetMaxDistanceAllowedFromPlayer(): number {
	const replayGetMaxDistanceAllowedFromPlayer_result = Citizen.invokeNative<number>('0x37A742571A01BD01', );
	return replayGetMaxDistanceAllowedFromPlayer_result;
}