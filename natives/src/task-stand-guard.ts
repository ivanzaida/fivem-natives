import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_STAND_GUARD
 *
 * 0xDEA4D02E8F52CE87

 * 
 * scenarioName example: "WORLD_HUMAN_GUARD_STAND"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} defendPositionX
 * @param {number} defendPositionY
 * @param {number} defendPositionZ
 * @param {number} heading
 * @param {string} context
 */
export function taskStandGuard(ped: PedIndex, defendPositionX: number, defendPositionY: number, defendPositionZ: number, heading: number, context: string): void {
	const taskStandGuard_result = Citizen.invokeNative<void>('0xDEA4D02E8F52CE87', ped, defendPositionX, defendPositionY, defendPositionZ, heading, context);
	return taskStandGuard_result;
}