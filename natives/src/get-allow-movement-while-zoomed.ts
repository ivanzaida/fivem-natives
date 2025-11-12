/**
 * PAD:GET_ALLOW_MOVEMENT_WHILE_ZOOMED
 *
 * 0x22C925E7C63C5628

 * 
 * Returns profile setting 17.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getAllowMovementWhileZoomed(): boolean {
	const getAllowMovementWhileZoomed_result = Citizen.invokeNative<boolean>('0x22C925E7C63C5628', );
	return getAllowMovementWhileZoomed_result;
}