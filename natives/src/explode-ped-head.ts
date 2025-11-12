import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * PED:EXPLODE_PED_HEAD
 *
 * 0xB958FAC3AA36D900

 * 
 * Forces the ped to fall back and kills it.
 * 
 * It doesn't really explode the ped's head but it kills the ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} wtWeapon
 */
export function explodePedHead(ped: PedIndex, wtWeapon: EWeaponType | number = 100416529): void {
	const explodePedHead_result = Citizen.invokeNative<void>('0xB958FAC3AA36D900', ped, wtWeapon);
	return explodePedHead_result;
}