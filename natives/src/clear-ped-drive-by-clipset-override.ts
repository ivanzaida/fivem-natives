import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_DRIVE_BY_CLIPSET_OVERRIDE
 *
 * 0x728A2C1D61F55E08

 * 
 * Clear this peds different driveby clipset.  Should be called after using SET_PED_DRIVE_BY_CLIPSET_OVERRIDE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedDriveByClipsetOverride(ped: PedIndex): void {
	const clearPedDriveByClipsetOverride_result = Citizen.invokeNative<void>('0x728A2C1D61F55E08', ped);
	return clearPedDriveByClipsetOverride_result;
}