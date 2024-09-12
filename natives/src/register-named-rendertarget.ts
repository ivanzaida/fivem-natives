/**
 * HUD:REGISTER_NAMED_RENDERTARGET
 *
 * 0x106F99CDCDEED9A0

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {boolean} delay To true to use texture streamed separatly as a rendertarget
 * @returns {boolean}  
 */
export function registerNamedRendertarget(name: string, delay: boolean = false): boolean {
	const registerNamedRendertarget_result = Citizen.invokeNative<boolean>('0x106F99CDCDEED9A0', name, delay);
	return registerNamedRendertarget_result;
}