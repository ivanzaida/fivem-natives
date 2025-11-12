import { EWeaponType } from '@ivanzaida/structures'

/**
 * HUD:HUD_GET_WEAPON_WHEEL_CURRENTLY_HIGHLIGHTED
 *
 * 0xAE146ED24909CAF4

 * 
 * Will continue to work even if the wheel isn't displayed, so check IF IS_HUD_COMPONENT_ACTIVE(NEW_HUD_WEAPON_WHEEL) first
 * 
 * Returns the weapon hash to the selected/highlighted weapon in the wheel
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EWeaponType}  
 */
export function hudGetWeaponWheelCurrentlyHighlighted(): EWeaponType {
	const hudGetWeaponWheelCurrentlyHighlighted_result = Citizen.invokeNative<EWeaponType>('0xAE146ED24909CAF4', );
	return hudGetWeaponWheelCurrentlyHighlighted_result;
}