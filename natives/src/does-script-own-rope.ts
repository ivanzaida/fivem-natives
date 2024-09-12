import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:DOES_SCRIPT_OWN_ROPE
 *
 * 0x67386FF623605BB2

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @returns {boolean}  
 */
export function doesScriptOwnRope(ropeID: RopeIndex): boolean {
	const doesScriptOwnRope_result = Citizen.invokeNative<boolean>('0x67386FF623605BB2', ropeID);
	return doesScriptOwnRope_result;
}