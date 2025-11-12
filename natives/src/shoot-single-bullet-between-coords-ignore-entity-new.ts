import { EWeaponType, PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * MISC:SHOOT_SINGLE_BULLET_BETWEEN_COORDS_IGNORE_ENTITY_NEW
 *
 * 0x5733B7E88AFB2E3B

 * 
 * entity - entity to ignore
 * targetEntity - entity to home in on, if the weapon hash provided supports homing
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
 * @param {boolean} forceCreateNewProjectileObject Flag ensures we create a NEW projectile object and don't use any equipped projectile objects from the firing entity.
 * @param {boolean} disablePlayerCoverStartAdjustment
 * @param {EntityIndex} targetEntity Parameter will enable homing code if the weapon is a rocket.
 * @param {boolean} doDeadCheck
 * @param {boolean} freezeProjectileWaitingOnCollision
 * @param {boolean} setIgnoreCollisionEntity
 * @param {boolean} ignoreCollisionResetNoBB To ignore collision until the projectile leaves the BoundingBox of the given IgnoreEntity
 */
export function shootSingleBulletBetweenCoordsIgnoreEntityNew(startCoorsX: number, startCoorsY: number, startCoorsZ: number, endCoorsX: number, endCoorsY: number, endCoorsZ: number, damageCaused: number, perfectAccuracy: boolean = false, weapon: EWeaponType | number = 1074790547, ped: PedIndex = null!, createTraceVfx: boolean = true, allowRumble: boolean = true, initialVelocity: number = 1, ignoreEntity: EntityIndex = null!, forceCreateNewProjectileObject: boolean = false, disablePlayerCoverStartAdjustment: boolean = false, targetEntity: EntityIndex = null!, doDeadCheck: boolean = true, freezeProjectileWaitingOnCollision: boolean = false, setIgnoreCollisionEntity: boolean = false, ignoreCollisionResetNoBB: boolean = false): void {
	const shootSingleBulletBetweenCoordsIgnoreEntityNew_result = Citizen.invokeNative<void>('0x5733B7E88AFB2E3B', startCoorsX, startCoorsY, startCoorsZ, endCoorsX, endCoorsY, endCoorsZ, damageCaused, perfectAccuracy, weapon, ped, createTraceVfx, allowRumble, initialVelocity, ignoreEntity, forceCreateNewProjectileObject, disablePlayerCoverStartAdjustment, targetEntity, doDeadCheck, freezeProjectileWaitingOnCollision, setIgnoreCollisionEntity, ignoreCollisionResetNoBB);
	return shootSingleBulletBetweenCoordsIgnoreEntityNew_result;
}