import { PedIndex, EWeaponType, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:GET_COORDS_OF_PROJECTILE_TYPE_WITHIN_DISTANCE
 *
 * 0xED2558D599937EFD

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {number} distance
 * @param {Vector3} positionOut [Ref]
 * @param {boolean} needsToBeStationary
 * @returns {boolean}  
 */
export function getCoordsOfProjectileTypeWithinDistance(ped: PedIndex, weaponType: EWeaponType | number, distance: number, positionOut: Vector3 /* ptr */, needsToBeStationary: boolean = false): boolean {
	const positionOutPtr = new Vector3Ref();
	const getCoordsOfProjectileTypeWithinDistance_result = Citizen.invokeNative<boolean>('0xED2558D599937EFD', ped, weaponType, distance, positionOutPtr.dataView, needsToBeStationary);
	positionOutPtr.copyToVector(positionOut);
	return getCoordsOfProjectileTypeWithinDistance_result;
}