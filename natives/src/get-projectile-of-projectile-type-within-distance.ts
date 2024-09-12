import { PedIndex, EWeaponType, Vector3, IntRef } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:GET_PROJECTILE_OF_PROJECTILE_TYPE_WITHIN_DISTANCE
 *
 * 0xF67924A428A734EC

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {number} distance
 * @param {Vector3} positionOut [Ref]
 * @param {IntRef} entity [Ref]
 * @param {boolean} needsToBeStationary
 * @returns {boolean}  
 */
export function getProjectileOfProjectileTypeWithinDistance(ped: PedIndex, weaponType: EWeaponType | number, distance: number, positionOut: Vector3 /* ptr */, entity: IntRef /* ptr */, needsToBeStationary: boolean = false): boolean {
	const positionOutPtr = new Vector3Ref();
	const getProjectileOfProjectileTypeWithinDistance_result = Citizen.invokeNative<boolean>('0xF67924A428A734EC', ped, weaponType, distance, positionOutPtr.dataView, entity.dataView, needsToBeStationary);
	positionOutPtr.copyToVector(positionOut);
	return getProjectileOfProjectileTypeWithinDistance_result;
}