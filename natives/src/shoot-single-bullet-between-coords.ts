import { EWeaponType, PedIndex } from '@ivanzaida/structures'

/**
 * MISC:SHOOT_SINGLE_BULLET_BETWEEN_COORDS
 *
 * 0xA934E5D7EEE03C7E

 * 
 * ------------------------------------------------------------------
 * @param {number} startCoorsX
 * @param {number} startCoorsY
 * @param {number} startCoorsZ
 * @param {number} endCoorsX
 * @param {number} endCoorsY
 * @param {number} endCoorsZ
 * @param {number} damageCaused
 * @param {boolean} perfectAccuracy
 * @param {EWeaponType} weapon Type can be projectiles but then the VecEndCoors is the direction and not where it will land The bForceCreateNewProjectileObject flag ensures we create a NEW projectile object and don't use any equipped projectile objects from the firing entity.
 * @param {PedIndex} ped
 * @param {boolean} createTraceVfx
 * @param {boolean} allowRumble
 * @param {number} initialVelocity
 */
export function shootSingleBulletBetweenCoords(startCoorsX: number, startCoorsY: number, startCoorsZ: number, endCoorsX: number, endCoorsY: number, endCoorsZ: number, damageCaused: number, perfectAccuracy: boolean = false, weapon: EWeaponType | number = 1074790547, ped: PedIndex = null!, createTraceVfx: boolean = true, allowRumble: boolean = true, initialVelocity: number = 1): void {
	const shootSingleBulletBetweenCoords_result = Citizen.invokeNative<void>('0xA934E5D7EEE03C7E', startCoorsX, startCoorsY, startCoorsZ, endCoorsX, endCoorsY, endCoorsZ, damageCaused, perfectAccuracy, weapon, ped, createTraceVfx, allowRumble, initialVelocity);
	return shootSingleBulletBetweenCoords_result;
}