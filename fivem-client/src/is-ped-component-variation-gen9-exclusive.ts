import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_PED_COMPONENT_VARIATION_GEN9_EXCLUSIVE
 *
 * 0XC767B581

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped.
 * @param {number} componentId The component id.
 * @param {number} drawableId The drawable id.
 * @returns {boolean}  Whether or not the ped component variation is a gen9 exclusive (stub assets).
 */
export function isPedComponentVariationGen9Exclusive(ped: PedIndex, componentId: number, drawableId: number): boolean {
	const isPedComponentVariationGen9Exclusive_result = Citizen.invokeNative<boolean>('0XC767B581', ped, componentId, drawableId);
	return isPedComponentVariationGen9Exclusive_result;
}