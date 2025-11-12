import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:CREATE_AIR_DEFENCE_SPHERE
 *
 * 0x51817FD0EC0A289C

 * 
 * Any bullets, projectiles or air vehicles that enter this sphere will be destroyed/exploded.
 * Weapon is used to trigger a shot/VFX aimed at the sphere intersection position of any bullets/projectiles to look like they're being shot down.
 * If no weapon hash passed in, sphere will not fire at vehicles, and bullets/projectiles will only be deleted.
 * Peds inside the sphere will enter the weapon blocked state when trying to aim.
 * MAX_AIR_DEFENCE_ZONES = 10, speak to Blair Trusler/David Hynd if this needs increasing.
 * Creates an air defence sphere at the defined position.
 * 
 * Both coordinates are from objects in the decompiled scripts. Native related to 0xECDC202B25E5CF48 p1 value. The only weapon hash used in the decompiled scripts is weapon_air_defence_gun. These two natives are used by the yacht script, decompiled scripts suggest it and the weapon hash used (valkyrie's rockets) are also used by yachts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} radius
 * @param {number} weaponPositionX
 * @param {number} weaponPositionY
 * @param {number} weaponPositionZ
 * @param {EWeaponType} weaponType
 * @returns {number}  
 */
export function createAirDefenceSphere(positionX: number, positionY: number, positionZ: number, radius: number, weaponPositionX: number, weaponPositionY: number, weaponPositionZ: number, weaponType: EWeaponType | number = 738733437): number {
	const createAirDefenceSphere_result = Citizen.invokeNative<number>('0x51817FD0EC0A289C', positionX, positionY, positionZ, radius, weaponPositionX, weaponPositionY, weaponPositionZ, weaponType);
	return createAirDefenceSphere_result;
}