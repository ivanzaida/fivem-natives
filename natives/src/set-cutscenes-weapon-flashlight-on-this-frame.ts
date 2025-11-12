import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_CUTSCENES_WEAPON_FLASHLIGHT_ON_THIS_FRAME
 *
 * 0x7825AE6DE930430C

 * 
 * Will only force it on if the weapon is not owned by a ped (i.e. It belongs to a cutscene).
 * 
 * Requires a component_at__flsh to be attached to the weapon object
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} forceOn
 */
export function setCutscenesWeaponFlashlightOnThisFrame(object: ObjectIndex, forceOn: boolean = true): void {
	const setCutscenesWeaponFlashlightOnThisFrame_result = Citizen.invokeNative<void>('0x7825AE6DE930430C', object, forceOn);
	return setCutscenesWeaponFlashlightOnThisFrame_result;
}