import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:REMOVE_WEAPON_FROM_PED
 *
 * 0x4F07124B9C56ED6F

 * This native removes a specified weapon from your selected ped.
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
 * C++:
 * WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);
 * The code above removes the knife from the player.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 */
export function removeWeaponFromPed(ped: PedIndex, typeOfWeapon: EWeaponType | number): void {
	const removeWeaponFromPed_result = Citizen.invokeNative<void>('0x4F07124B9C56ED6F', ped, typeOfWeapon);
	return removeWeaponFromPed_result;
}