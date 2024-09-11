import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * WEAPON:GET_CURRENT_PED_WEAPON_ENTITY_INDEX
 *
 * 0x484426882F80CACE

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} doDeadCheck
 * @returns {EntityIndex}  
 */
export function getCurrentPedWeaponEntityIndex(ped: PedIndex, doDeadCheck: boolean = true): EntityIndex {
	const getCurrentPedWeaponEntityIndex_result = Citizen.invokeNative<EntityIndex>('0x484426882F80CACE', ped, doDeadCheck);
	return getCurrentPedWeaponEntityIndex_result;
}