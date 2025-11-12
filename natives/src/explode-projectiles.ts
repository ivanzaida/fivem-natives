import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:EXPLODE_PROJECTILES
 *
 * 0xAF3A361C94FBBFC6

 * 
 * WEAPON::EXPLODE_PROJECTILES(PLAYER::PLAYER_PED_ID(), func_221(0x00000003), 0x00000001);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {boolean} instant
 */
export function explodeProjectiles(ped: PedIndex, weaponType: EWeaponType | number, instant: boolean = false): void {
	const explodeProjectiles_result = Citizen.invokeNative<void>('0xAF3A361C94FBBFC6', ped, weaponType, instant);
	return explodeProjectiles_result;
}