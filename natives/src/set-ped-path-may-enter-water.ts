import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_PATH_MAY_ENTER_WATER
 *
 * 0x753DE44F9049D173

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} mayEnter
 */
export function setPedPathMayEnterWater(ped: PedIndex, mayEnter: boolean): void {
	const setPedPathMayEnterWater_result = Citizen.invokeNative<void>('0x753DE44F9049D173', ped, mayEnter);
	return setPedPathMayEnterWater_result;
}