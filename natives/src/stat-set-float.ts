import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_FLOAT
 *
 * 0x4F8678C02360C3D2

 * 
 * Example:
 *  STATS::STAT_SET_FLOAT(MISC::GET_HASH_KEY("MP0_WEAPON_ACCURACY"), 66.6f, true);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {number} data
 * @param {boolean} coderAssert
 * @returns {boolean}  
 */
export function statSetFloat(keyHash: EStatsenum | number, data: number, coderAssert: boolean = true): boolean {
	const statSetFloat_result = Citizen.invokeNative<boolean>('0x4F8678C02360C3D2', keyHash, data, coderAssert);
	return statSetFloat_result;
}