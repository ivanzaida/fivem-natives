import { EWeaponType } from '@ivanzaida/structures'

/**
 * HUD:HUD_SET_WEAPON_WHEEL_TOP_SLOT
 *
 * 0xB0D3DD0BB37136FD

 * 
 * Overrides any player preferences the player may have set up based on which slot they last selected
 * 
 * Set the active slotIndex in the wheel weapon to the slot associated with the provided Weapon hash
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponToShow
 */
export function hudSetWeaponWheelTopSlot(weaponToShow: EWeaponType | number): void {
	const hudSetWeaponWheelTopSlot_result = Citizen.invokeNative<void>('0xB0D3DD0BB37136FD', weaponToShow);
	return hudSetWeaponWheelTopSlot_result;
}