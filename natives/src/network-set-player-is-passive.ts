/**
 * NETWORK:NETWORK_SET_PLAYER_IS_PASSIVE
 *
 * 0x08C2ACB534243279

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isPassive
 */
export function networkSetPlayerIsPassive(isPassive: boolean): void {
	const networkSetPlayerIsPassive_result = Citizen.invokeNative<void>('0x08C2ACB534243279', isPassive);
	return networkSetPlayerIsPassive_result;
}