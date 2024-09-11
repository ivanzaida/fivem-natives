import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_CHANGE_SCRIPT_OWNER
 *
 * 0x7A7B42D5C86E7EDF

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {boolean} scriptHostObject
 * @param {boolean} grabFromOtherScript
 */
export function ropeChangeScriptOwner(ropeID: RopeIndex, scriptHostObject: boolean, grabFromOtherScript: boolean): void {
	const ropeChangeScriptOwner_result = Citizen.invokeNative<void>('0x7A7B42D5C86E7EDF', ropeID, scriptHostObject, grabFromOtherScript);
	return ropeChangeScriptOwner_result;
}