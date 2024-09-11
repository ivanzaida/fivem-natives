import { EWeaponType, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:GET_COORDS_OF_PROJECTILE_TYPE_IN_ANGLED_AREA
 *
 * 0x17D830B00DB4A9DC

 * 
 * ------------------------------------------------------------------
 * @param {number} vecAngledAreaPoint1X
 * @param {number} vecAngledAreaPoint1Y
 * @param {number} vecAngledAreaPoint1Z
 * @param {number} vecAngledAreaPoint2X
 * @param {number} vecAngledAreaPoint2Y
 * @param {number} vecAngledAreaPoint2Z
 * @param {number} distanceOfOppositeFace
 * @param {EWeaponType} weaponType
 * @param {Vector3} positionOut [Ref]
 * @param {boolean} isPlayer
 * @returns {boolean}  
 */
export function getCoordsOfProjectileTypeInAngledArea(vecAngledAreaPoint1X: number, vecAngledAreaPoint1Y: number, vecAngledAreaPoint1Z: number, vecAngledAreaPoint2X: number, vecAngledAreaPoint2Y: number, vecAngledAreaPoint2Z: number, distanceOfOppositeFace: number, weaponType: EWeaponType | number, positionOut: Vector3 /* ptr */, isPlayer: boolean): boolean {
	const positionOutPtr = new Vector3Ref();
	const getCoordsOfProjectileTypeInAngledArea_result = Citizen.invokeNative<boolean>('0x17D830B00DB4A9DC', vecAngledAreaPoint1X, vecAngledAreaPoint1Y, vecAngledAreaPoint1Z, vecAngledAreaPoint2X, vecAngledAreaPoint2Y, vecAngledAreaPoint2Z, distanceOfOppositeFace, weaponType, positionOutPtr.dataView, isPlayer);
	positionOutPtr.copyToVector(positionOut);
	return getCoordsOfProjectileTypeInAngledArea_result;
}