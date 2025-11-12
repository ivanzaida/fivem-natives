/**
 * NETWORK:NETWORK_SESSION_SET_MATCHMAKING_MENTAL_STATE
 *
 * 0xAECA84689B07DB71

 * 
 * p0 in the decompiled scripts is always the stat mesh_texblend  0.07 to int
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} mentalState
 */
export function networkSessionSetMatchmakingMentalState(mentalState: number): void {
	const networkSessionSetMatchmakingMentalState_result = Citizen.invokeNative<void>('0xAECA84689B07DB71', mentalState);
	return networkSessionSetMatchmakingMentalState_result;
}