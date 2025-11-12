import { ModelNames } from '@ivanzaida/structures'

/**
 * BRAIN:ADD_SCRIPT_TO_RANDOM_PED
 *
 * 0x897DF886E8694302

 * 
 * BRAIN::ADD_SCRIPT_TO_RANDOM_PED("pb_prostitute", ${s_f_y_hooker_01}, 100, 0);
 * 
 * - Nacorpio
 * 
 * -----
 * 
 * Hardcoded to not work in Multiplayer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scriptName
 * @param {ModelNames} pedModelHashKey
 * @param {number} percentageChance
 * @param {boolean} scenarioPedsOnly
 */
export function addScriptToRandomPed(scriptName: string, pedModelHashKey: ModelNames, percentageChance: number, scenarioPedsOnly: boolean): void {
	const addScriptToRandomPed_result = Citizen.invokeNative<void>('0x897DF886E8694302', scriptName, pedModelHashKey, percentageChance, scenarioPedsOnly);
	return addScriptToRandomPed_result;
}