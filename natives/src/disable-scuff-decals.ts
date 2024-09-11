/**
 * GRAPHICS:DISABLE_SCUFF_DECALS
 *
 * 0xBC31667BB0F6F0E5

 * 
 * ------------------------------------------------------------------
 * @param {boolean} val
 */
export function disableScuffDecals(val: boolean): void {
	const disableScuffDecals_result = Citizen.invokeNative<void>('0xBC31667BB0F6F0E5', val);
	return disableScuffDecals_result;
}