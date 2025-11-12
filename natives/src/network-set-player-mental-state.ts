/**
 * NETWORK:NETWORK_SET_PLAYER_MENTAL_STATE
 *
 * 0x8060309EC15DED26

 * 
 * p0 in the decompiled scripts is always the stat mesh_texblend  0.07 to int
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} mentalState
 */
export function networkSetPlayerMentalState(mentalState: number): void {
	const networkSetPlayerMentalState_result = Citizen.invokeNative<void>('0x8060309EC15DED26', mentalState);
	return networkSetPlayerMentalState_result;
}