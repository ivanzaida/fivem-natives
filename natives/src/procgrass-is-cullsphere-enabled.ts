/**
 * GRAPHICS:PROCGRASS_IS_CULLSPHERE_ENABLED
 *
 * 0x67A272C42918EF9F

 * 
 * ------------------------------------------------------------------
 * @param {number} idx
 * @returns {boolean}  
 */
export function procgrassIsCullsphereEnabled(idx: number): boolean {
	const procgrassIsCullsphereEnabled_result = Citizen.invokeNative<boolean>('0x67A272C42918EF9F', idx);
	return procgrassIsCullsphereEnabled_result;
}