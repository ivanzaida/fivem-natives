/**
 * PAD:SET_PLAYERPAD_SHAKES_WHEN_CONTROLLER_DISABLED
 *
 * 0x92F061476F865C31

 * 
 * ------------------------------------------------------------------
 * @param {boolean} setPadShakes
 */
export function setPlayerpadShakesWhenControllerDisabled(setPadShakes: boolean): void {
	const setPlayerpadShakesWhenControllerDisabled_result = Citizen.invokeNative<void>('0x92F061476F865C31', setPadShakes);
	return setPlayerpadShakesWhenControllerDisabled_result;
}