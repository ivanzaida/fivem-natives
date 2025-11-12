import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GIVE_DELAYED_WEAPON_TO_PED
 *
 * 0x4BD3F83B0D7E1417

 * 
 * Gives a weapon to PED with a delay, example:
 * 
 * WEAPON::GIVE_DELAYED_WEAPON_TO_PED(PED::PLAYER_PED_ID(), MISC::GET_HASH_KEY("WEAPON_PISTOL"), 1000, false)
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {number} amountOfAmmo
 * @param {boolean} setAsCurrentWeapon
 */
export function giveDelayedWeaponToPed(ped: PedIndex, typeOfWeapon: EWeaponType | number, amountOfAmmo: number, setAsCurrentWeapon: boolean): void {
	const giveDelayedWeaponToPed_result = Citizen.invokeNative<void>('0x4BD3F83B0D7E1417', ped, typeOfWeapon, amountOfAmmo, setAsCurrentWeapon);
	return giveDelayedWeaponToPed_result;
}