/**
 * INTERIOR:GET_INTERIOR_FROM_PRIMARY_VIEW
 *
 * 0x92EA98681B1610F2

 * 
 * Returns the current interior id from gameplay camera
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getInteriorFromPrimaryView(): number {
	const getInteriorFromPrimaryView_result = Citizen.invokeNative<number>('0x92EA98681B1610F2', );
	return getInteriorFromPrimaryView_result;
}