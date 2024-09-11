/**
 * NETWORK:NETWORK_SET_IN_MP_CUTSCENE
 *
 * 0x42B4970D598C8A72

 * 
 * ------------------------------------------------------------------
 * @param {boolean} inMPCutscene
 * @param {boolean} makePlayerInvincible
 */
export function networkSetInMpCutscene(inMPCutscene: boolean, makePlayerInvincible: boolean = true): void {
	const networkSetInMpCutscene_result = Citizen.invokeNative<void>('0x42B4970D598C8A72', inMPCutscene, makePlayerInvincible);
	return networkSetInMpCutscene_result;
}