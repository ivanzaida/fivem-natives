import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PARACHUTE_TASK_TARGET
 *
 * 0x83834BBDF7CA6EC7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} targetLocationX
 * @param {number} targetLocationY
 * @param {number} targetLocationZ
 */
export function setParachuteTaskTarget(ped: PedIndex, targetLocationX: number, targetLocationY: number, targetLocationZ: number): void {
	const setParachuteTaskTarget_result = Citizen.invokeNative<void>('0x83834BBDF7CA6EC7', ped, targetLocationX, targetLocationY, targetLocationZ);
	return setParachuteTaskTarget_result;
}