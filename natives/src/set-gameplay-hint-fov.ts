/**
 * CAM:SET_GAMEPLAY_HINT_FOV
 *
 * 0x4F5BF7798505A667

 * 
 * Call at the start of the hint to avoid pops
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} fov
 */
export function setGameplayHintFov(fov: number): void {
	const setGameplayHintFov_result = Citizen.invokeNative<void>('0x4F5BF7798505A667', fov);
	return setGameplayHintFov_result;
}