/**
 * CFX:CALL_MINIMAP_SCALEFORM_FUNCTION
 *
 * 0X4C89C0ED

 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * 
 * ------------------------------------------------------------------
 * @param {number} miniMap The minimap overlay ID.
 * @param {string} fnName A function in the overlay's TIMELINE.
 * @returns {boolean}  
 */
export function callMinimapScaleformFunction(miniMap: number, fnName: string): boolean {
	const callMinimapScaleformFunction_result = Citizen.invokeNative<boolean>('0X4C89C0ED', miniMap, fnName);
	return callMinimapScaleformFunction_result;
}