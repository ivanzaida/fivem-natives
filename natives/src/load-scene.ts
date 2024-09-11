/**
 * STREAMING:LOAD_SCENE
 *
 * 0x6C39BDF5EA5D38FC

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function loadScene(coorsX: number, coorsY: number, coorsZ: number): void {
	const loadScene_result = Citizen.invokeNative<void>('0x6C39BDF5EA5D38FC', coorsX, coorsY, coorsZ);
	return loadScene_result;
}