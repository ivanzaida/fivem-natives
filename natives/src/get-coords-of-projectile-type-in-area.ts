import { EWeaponType, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:GET_COORDS_OF_PROJECTILE_TYPE_IN_AREA
 *
 * 0x8C538F7B2B233B2C

 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {EWeaponType} weaponType
 * @param {Vector3} positionOut [Ref]
 * @param {boolean} isPlayer
 * @returns {boolean}  
 */
export function getCoordsOfProjectileTypeInArea(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, weaponType: EWeaponType | number, positionOut: Vector3 /* ptr */, isPlayer: boolean = false): boolean {
	const positionOutPtr = new Vector3Ref();
	const getCoordsOfProjectileTypeInArea_result = Citizen.invokeNative<boolean>('0x8C538F7B2B233B2C', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, weaponType, positionOutPtr.dataView, isPlayer);
	positionOutPtr.copyToVector(positionOut);
	return getCoordsOfProjectileTypeInArea_result;
}