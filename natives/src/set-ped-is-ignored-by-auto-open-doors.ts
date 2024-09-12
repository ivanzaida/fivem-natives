import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_IS_IGNORED_BY_AUTO_OPEN_DOORS
 *
 * 0x39259B19C39CA05F

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} ignored
 */
export function setPedIsIgnoredByAutoOpenDoors(ped: PedIndex, ignored: boolean): void {
	const setPedIsIgnoredByAutoOpenDoors_result = Citizen.invokeNative<void>('0x39259B19C39CA05F', ped, ignored);
	return setPedIsIgnoredByAutoOpenDoors_result;
}