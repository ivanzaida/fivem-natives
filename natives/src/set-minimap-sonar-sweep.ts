/**
 * HUD:SET_MINIMAP_SONAR_SWEEP
 *
 * 0x3D0BD9B4E36B9BAD

 * 
 * ------------------------------------------------------------------
 * @param {boolean} visible
 */
export function setMinimapSonarSweep(visible: boolean): void {
	const setMinimapSonarSweep_result = Citizen.invokeNative<void>('0x3D0BD9B4E36B9BAD', visible);
	return setMinimapSonarSweep_result;
}