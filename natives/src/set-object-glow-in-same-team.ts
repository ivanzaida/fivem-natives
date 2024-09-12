import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_GLOW_IN_SAME_TEAM
 *
 * 0x57619EEF13EEBFBE

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 */
export function setObjectGlowInSameTeam(object: ObjectIndex): void {
	const setObjectGlowInSameTeam_result = Citizen.invokeNative<void>('0x57619EEF13EEBFBE', object);
	return setObjectGlowInSameTeam_result;
}