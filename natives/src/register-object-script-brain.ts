import { ModelNames } from '@ivanzaida/structures'

/**
 * BRAIN:REGISTER_OBJECT_SCRIPT_BRAIN
 *
 * 0x55F4E2629EABB8DD

 * 
 * Registers a script for any object with a specific model hash.
 * 
 * BRAIN::REGISTER_OBJECT_SCRIPT_BRAIN("ob_telescope", ${prop_telescope_01}, 100, 4.0, -1, 9);
 * 
 * - Nacorpio
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scriptName
 * @param {ModelNames} objectModelHashKey
 * @param {number} percentageChance
 * @param {number} activationRange
 * @param {number} objectGroupingID
 * @param {number} setToWhichThisBrainBelongs
 */
export function registerObjectScriptBrain(scriptName: string, objectModelHashKey: ModelNames, percentageChance: number, activationRange: number, objectGroupingID: number, setToWhichThisBrainBelongs: number): void {
	const registerObjectScriptBrain_result = Citizen.invokeNative<void>('0x55F4E2629EABB8DD', scriptName, objectModelHashKey, percentageChance, activationRange, objectGroupingID, setToWhichThisBrainBelongs);
	return registerObjectScriptBrain_result;
}