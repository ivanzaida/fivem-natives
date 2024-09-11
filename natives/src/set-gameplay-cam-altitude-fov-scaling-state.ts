/**
 * CAM:SET_GAMEPLAY_CAM_ALTITUDE_FOV_SCALING_STATE
 *
 * 0xA927617A11A54503

 * 
 * ------------------------------------------------------------------
 * @param {boolean} state
 */
export function setGameplayCamAltitudeFovScalingState(state: boolean): void {
	const setGameplayCamAltitudeFovScalingState_result = Citizen.invokeNative<void>('0xA927617A11A54503', state);
	return setGameplayCamAltitudeFovScalingState_result;
}