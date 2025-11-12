import { PedIndex, EFleeAttribute } from '@ivanzaida/structures'

/**
 * PED:SET_PED_FLEE_ATTRIBUTES
 *
 * 0x1CA08719184AFC6F

 * 
 * bit 1 (0x2) = use vehicle
 * bit 15 (0x8000) = force cower
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EFleeAttribute} fleeAttribute
 * @param {boolean} activeSkill
 */
export function setPedFleeAttributes(ped: PedIndex, fleeAttribute: EFleeAttribute | number, activeSkill: boolean): void {
	const setPedFleeAttributes_result = Citizen.invokeNative<void>('0x1CA08719184AFC6F', ped, fleeAttribute, activeSkill);
	return setPedFleeAttributes_result;
}