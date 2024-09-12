/**
 * CAM:SET_CINEMATIC_BUTTON_ACTIVE
 *
 * 0x0A0A06C514052E80

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function setCinematicButtonActive(enable: boolean): void {
	const setCinematicButtonActive_result = Citizen.invokeNative<void>('0x0A0A06C514052E80', enable);
	return setCinematicButtonActive_result;
}