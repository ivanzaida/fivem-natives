import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DRIVE_BY_CLIPSET_OVERRIDE
 *
 * 0x1E4D3966543704DD

 * 
 * Make the ped use different driveby clipset.
 * Be sure to clear the overide with CLEAR_PED_DRIVE_BY_CLIPSET_OVERRIDE when finished!
 * DON'T FORGET to stream in the new clipset before calling this
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} clipSet
 */
export function setPedDriveByClipsetOverride(ped: PedIndex, clipSet: string): void {
	const setPedDriveByClipsetOverride_result = Citizen.invokeNative<void>('0x1E4D3966543704DD', ped, clipSet);
	return setPedDriveByClipsetOverride_result;
}