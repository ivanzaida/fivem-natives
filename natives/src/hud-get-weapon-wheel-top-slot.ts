import { EWeaponType } from '@ivanzaida/structures'

/**
 * HUD:HUD_GET_WEAPON_WHEEL_TOP_SLOT
 *
 * 0xFCFCA9D377ED6568

 * 
 * Valid slot indices are 0 to 7.  This function will return WEAPONTYPE_INVALID for any empty slots
 * 
 * Returns the weapon hash active in a specific weapon wheel slotList
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {EWeaponType}  
 */
export function hudGetWeaponWheelTopSlot(slot: number): EWeaponType {
	const hudGetWeaponWheelTopSlot_result = Citizen.invokeNative<EWeaponType>('0xFCFCA9D377ED6568', slot);
	return hudGetWeaponWheelTopSlot_result;
}