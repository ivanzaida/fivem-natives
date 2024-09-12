/**
 * PED:_HAS_PED_CLEAR_LOS_TO_ENTITY
 *
 * 0xA32ABFEB2A03B306

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasPedClearLosToEntity(): boolean {
	const hasPedClearLosToEntity_result = Citizen.invokeNative<boolean>('0xA32ABFEB2A03B306', );
	return hasPedClearLosToEntity_result;
}