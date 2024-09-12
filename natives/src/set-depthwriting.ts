/**
 * GRAPHICS:SET_DEPTHWRITING
 *
 * 0x3547E68D04DBECAD

 * 
 * ------------------------------------------------------------------
 * @param {boolean} on
 */
export function setDepthwriting(on: boolean): void {
	const setDepthwriting_result = Citizen.invokeNative<void>('0x3547E68D04DBECAD', on);
	return setDepthwriting_result;
}