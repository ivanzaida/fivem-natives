import { EWeaponType, PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * MISC:SHOOT_SINGLE_BULLET_BETWEEN_COORDS_IGNORE_ENTITY
 *
 * 0x2D8982A81816E618

 * 
 * entity - entity to ignore
 * 
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
 * @param {EWeaponType} weapon
 * @param {PedIndex} ped
 * @param {boolean} createTraceVfx
 * @param {boolean} allowRumble
 * @param {number} initialVelocity
 * @param {EntityIndex} ignoreEntity
 * @param {EntityIndex} targetEntity Parameter will enable homing code if the weapon is a rocket.
 */
export function shootSingleBulletBetweenCoordsIgnoreEntity(startCoorsX: number, startCoorsY: number, startCoorsZ: number, endCoorsX: number, endCoorsY: number, endCoorsZ: number, damageCaused: number, perfectAccuracy: boolean = false, weapon: EWeaponType | number = 1074790547, ped: PedIndex = null!, createTraceVfx: boolean = true, allowRumble: boolean = true, initialVelocity: number = 1, ignoreEntity: EntityIndex = null!, targetEntity: EntityIndex = null!): void {
	const shootSingleBulletBetweenCoordsIgnoreEntity_result = Citizen.invokeNative<void>('0x2D8982A81816E618', startCoorsX, startCoorsY, startCoorsZ, endCoorsX, endCoorsY, endCoorsZ, damageCaused, perfectAccuracy, weapon, ped, createTraceVfx, allowRumble, initialVelocity, ignoreEntity, targetEntity);
	return shootSingleBulletBetweenCoordsIgnoreEntity_result;
}