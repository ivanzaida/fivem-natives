import { PedIndex, IntRef } from '@ivanzaida/structures'

/**
 * PED:IS_PED_EVASIVE_DIVING
 *
 * 0x60C848F2DC20EC23

 * 
 * Presumably returns the Entity that the Ped is currently diving out of the way of.
 * 
 * var num3;
 *     if (PED::IS_PED_EVASIVE_DIVING(A_0, &num3) != 0)
 *         if (ENTITY::IS_ENTITY_A_VEHICLE(num3) != 0)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {IntRef} entityDivingFrom [Ref]
 * @returns {boolean}  
 */
export function isPedEvasiveDiving(ped: PedIndex, entityDivingFrom: IntRef /* ptr */): boolean {
	const isPedEvasiveDiving_result = Citizen.invokeNative<boolean>('0x60C848F2DC20EC23', ped, entityDivingFrom.dataView);
	return isPedEvasiveDiving_result;
}