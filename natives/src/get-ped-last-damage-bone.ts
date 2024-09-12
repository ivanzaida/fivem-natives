import { PedIndex, IntRef } from '@ivanzaida/structures'

/**
 * PED:GET_PED_LAST_DAMAGE_BONE
 *
 * 0xB76C3F86B744BBA5

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {IntRef} outBoneTag [Ref]
 * @returns {boolean}  
 */
export function getPedLastDamageBone(ped: PedIndex, outBoneTag: IntRef /* ptr */): boolean {
	const getPedLastDamageBone_result = Citizen.invokeNative<boolean>('0xB76C3F86B744BBA5', ped, outBoneTag.dataView);
	return getPedLastDamageBone_result;
}