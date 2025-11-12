import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PANIC_EXIT_SCENARIO
 *
 * 0x51468F9DE2FB70E4

 * 
 * Causes a ped to exit a scenario (via playing a panic outro if possible, otherwise normal) immediately, if possible.
 * The ped must currently be using a scenario.
 * Returns a boolean indicating whether the exit of the scenario has begun successfully.
 * Does not queue a response task to be used after the exit, that must be done separately.
 * It can be run on peds using CTaskUseScenario or CTaskCowerScenario.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} dangerPositionX
 * @param {number} dangerPositionY
 * @param {number} dangerPositionZ
 * @returns {boolean}  
 */
export function setPedPanicExitScenario(ped: PedIndex, dangerPositionX: number, dangerPositionY: number, dangerPositionZ: number): boolean {
	const setPedPanicExitScenario_result = Citizen.invokeNative<boolean>('0x51468F9DE2FB70E4', ped, dangerPositionX, dangerPositionY, dangerPositionZ);
	return setPedPanicExitScenario_result;
}