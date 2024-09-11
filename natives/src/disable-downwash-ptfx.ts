/**
 * GRAPHICS:DISABLE_DOWNWASH_PTFX
 *
 * 0x8D16FC917312C618

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function disableDownwashPtfx(enable: boolean): void {
	const disableDownwashPtfx_result = Citizen.invokeNative<void>('0x8D16FC917312C618', enable);
	return disableDownwashPtfx_result;
}