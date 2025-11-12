import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_WEAPON_IMPACTS_APPLY_GREATER_FORCE
 *
 * 0x6F3AF5B029E1AD6C

 * 
 * Sets whether weapon impacts apply a greater force to this object
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} applyGreaterForce
 */
export function setWeaponImpactsApplyGreaterForce(object: ObjectIndex, applyGreaterForce: boolean): void {
	const setWeaponImpactsApplyGreaterForce_result = Citizen.invokeNative<void>('0x6F3AF5B029E1AD6C', object, applyGreaterForce);
	return setWeaponImpactsApplyGreaterForce_result;
}