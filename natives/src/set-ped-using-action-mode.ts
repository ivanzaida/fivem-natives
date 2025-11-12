import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_USING_ACTION_MODE
 *
 * 0x96A0632EBDD87FA3

 * 
 * p2 is usually -1 in the scripts. action is either 0 or "DEFAULT_ACTION".
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} usingActionMode
 * @param {number} actionModeTime
 * @param {string} actionModeName
 */
export function setPedUsingActionMode(ped: PedIndex, usingActionMode: boolean, actionModeTime: number = 1, actionModeName: string = null!): void {
	const setPedUsingActionMode_result = Citizen.invokeNative<void>('0x96A0632EBDD87FA3', ped, usingActionMode, actionModeTime, actionModeName);
	return setPedUsingActionMode_result;
}