import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_WEAPON_ANIMATION_OVERRIDE
 *
 * 0X63ED2E7

 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#_0x1055AC3A667F09D9).
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped.
 * @returns {number}  The weapon animation override.
 */
export function getWeaponAnimationOverride(ped: PedIndex): number {
	const getWeaponAnimationOverride_result = Citizen.invokeNative<number>('0X63ED2E7', ped);
	return getWeaponAnimationOverride_result;
}