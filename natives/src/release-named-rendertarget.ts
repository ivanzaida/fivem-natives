/**
 * HUD:RELEASE_NAMED_RENDERTARGET
 *
 * 0xF8211BE23F0D0552

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @returns {boolean}  
 */
export function releaseNamedRendertarget(name: string): boolean {
	const releaseNamedRendertarget_result = Citizen.invokeNative<boolean>('0xF8211BE23F0D0552', name);
	return releaseNamedRendertarget_result;
}