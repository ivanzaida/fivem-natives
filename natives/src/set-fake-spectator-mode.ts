/**
 * HUD:SET_FAKE_SPECTATOR_MODE
 *
 * 0x41CA829CEAEC6F29

 * 
 * Setter for GET_FAKE_SPECTATOR_MODE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 */
export function setFakeSpectatorMode(value: boolean): void {
	const setFakeSpectatorMode_result = Citizen.invokeNative<void>('0x41CA829CEAEC6F29', value);
	return setFakeSpectatorMode_result;
}