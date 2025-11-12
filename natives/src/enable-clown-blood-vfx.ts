/**
 * GRAPHICS:ENABLE_CLOWN_BLOOD_VFX
 *
 * 0xC826EB0F21193234

 * 
 * Creates cartoon effect when Michel smokes the weed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function enableClownBloodVfx(enable: boolean): void {
	const enableClownBloodVfx_result = Citizen.invokeNative<void>('0xC826EB0F21193234', enable);
	return enableClownBloodVfx_result;
}