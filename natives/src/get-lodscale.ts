/**
 * STREAMING:GET_LODSCALE
 *
 * 0xD173C7695174C519

 * 
 * returns current global LOD scale
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getLodscale(): number {
	const getLodscale_result = Citizen.invokeNative<number>('0xD173C7695174C519', );
	return getLodscale_result;
}