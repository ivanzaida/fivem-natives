import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:GET_OBJECT_FRAGMENT_DAMAGE_HEALTH
 *
 * 0x79BDC52C38AAF639

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} healthPercentageByMass
 * @returns {number}  
 */
export function getObjectFragmentDamageHealth(object: ObjectIndex, healthPercentageByMass: boolean): number {
	const getObjectFragmentDamageHealth_result = Citizen.invokeNative<number>('0x79BDC52C38AAF639', object, healthPercentageByMass);
	return getObjectFragmentDamageHealth_result;
}