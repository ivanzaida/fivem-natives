/**
 * HUD:IS_NAMED_RENDERTARGET_REGISTERED
 *
 * 0xC13AFEAFC3F7AD96

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @returns {boolean}  
 */
export function isNamedRendertargetRegistered(name: string): boolean {
	const isNamedRendertargetRegistered_result = Citizen.invokeNative<boolean>('0xC13AFEAFC3F7AD96', name);
	return isNamedRendertargetRegistered_result;
}