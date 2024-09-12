/**
 * CFX:SET_RUNTIME_TEXTURE_ARGB_DATA
 *
 * 0X3963D527

 * 
 * ------------------------------------------------------------------
 * @param {number} tex
 * @param {string} buffer
 * @param {number} length
 * @returns {boolean}  
 */
export function setRuntimeTextureArgbData(tex: number, buffer: string, length: number): boolean {
	const setRuntimeTextureArgbData_result = Citizen.invokeNative<boolean>('0X3963D527', tex, buffer, length);
	return setRuntimeTextureArgbData_result;
}