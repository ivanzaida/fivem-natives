/**
 * GRAPHICS:PROCGRASS_DISABLE_CULLSPHERE
 *
 * 0x85183ED7096BA9E5

 * 
 * ------------------------------------------------------------------
 * @param {number} idx
 */
export function procgrassDisableCullsphere(idx: number): void {
	const procgrassDisableCullsphere_result = Citizen.invokeNative<void>('0x85183ED7096BA9E5', idx);
	return procgrassDisableCullsphere_result;
}