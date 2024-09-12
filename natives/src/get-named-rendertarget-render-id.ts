/**
 * HUD:GET_NAMED_RENDERTARGET_RENDER_ID
 *
 * 0x08732C0099FA1813

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @returns {number}  
 */
export function getNamedRendertargetRenderId(name: string): number {
	const getNamedRendertargetRenderId_result = Citizen.invokeNative<number>('0x08732C0099FA1813', name);
	return getNamedRendertargetRenderId_result;
}