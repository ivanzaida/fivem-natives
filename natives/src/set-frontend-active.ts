/**
 * HUD:SET_FRONTEND_ACTIVE
 *
 * 0x7946F7681E9E1D79

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setFrontendActive(active: boolean): void {
	const setFrontendActive_result = Citizen.invokeNative<void>('0x7946F7681E9E1D79', active);
	return setFrontendActive_result;
}