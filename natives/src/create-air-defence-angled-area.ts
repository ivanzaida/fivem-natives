import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:CREATE_AIR_DEFENCE_ANGLED_AREA
 *
 * 0x0C0C6031DB5E2A28

 * 
 * Any bullets, projectiles or air vehicles that enter this angled area will be destroyed/exploded.
 * Weapon is used to trigger a shot/VFX aimed at the area intersection position of any bullets/projectiles to look like they're being shot down.
 * If no weapon hash passed in, angled area will not fire at vehicles, and bullets/projectiles will only be deleted.
 * Peds inside the angled area will enter the weapon blocked state when trying to aim.
 * MAX_AIR_DEFENCE_ZONES = 10, speak to Blair Trusler/David Hynd if this needs increasing.
 * Creates an air defence angled area at the defined position.
 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coors1X
 * @param {number} coors1Y
 * @param {number} coors1Z
 * @param {number} coors2X
 * @param {number} coors2Y
 * @param {number} coors2Z
 * @param {number} areaWidth
 * @param {number} weaponPositionX
 * @param {number} weaponPositionY
 * @param {number} weaponPositionZ
 * @param {EWeaponType} weaponType
 * @returns {number}  
 */
export function createAirDefenceAngledArea(coors1X: number, coors1Y: number, coors1Z: number, coors2X: number, coors2Y: number, coors2Z: number, areaWidth: number, weaponPositionX: number, weaponPositionY: number, weaponPositionZ: number, weaponType: EWeaponType | number = 738733437): number {
	const createAirDefenceAngledArea_result = Citizen.invokeNative<number>('0x0C0C6031DB5E2A28', coors1X, coors1Y, coors1Z, coors2X, coors2Y, coors2Z, areaWidth, weaponPositionX, weaponPositionY, weaponPositionZ, weaponType);
	return createAirDefenceAngledArea_result;
}