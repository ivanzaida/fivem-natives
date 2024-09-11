import { ERelGroupHash } from '@ivanzaida/structures'

/**
 * PED:SET_RELATIONSHIP_GROUP_AFFECTS_WANTED_LEVEL
 *
 * 0x290573EE8D28208D

 * 
 * ------------------------------------------------------------------
 * @param {ERelGroupHash} relGroup
 * @param {boolean} shouldAffectWantedLevel
 */
export function setRelationshipGroupAffectsWantedLevel(relGroup: ERelGroupHash | number, shouldAffectWantedLevel: boolean): void {
	const setRelationshipGroupAffectsWantedLevel_result = Citizen.invokeNative<void>('0x290573EE8D28208D', relGroup, shouldAffectWantedLevel);
	return setRelationshipGroupAffectsWantedLevel_result;
}