import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_SHOOT_AT_TARGET
 *
 * 0xD2A388162B1121E3

 * 
 * Commands the driver of an armed vehicle (p0) to shoot its weapon at a target (p1). p3, p4 and p5 are the coordinates of the target. Example:
 * 
 * WEAPON::SET_CURRENT_PED_VEHICLE_WEAPON(pilot,MISC::GET_HASH_KEY("VEHICLE_WEAPON_PLANE_ROCKET"));                        VEHICLE::SET_VEHICLE_SHOOT_AT_TARGET(pilot, target, targPos.x, targPos.y, targPos.z);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} targetEntity
 * @param {number} vecTargetCoorsX
 * @param {number} vecTargetCoorsY
 * @param {number} vecTargetCoorsZ
 */
export function setVehicleShootAtTarget(ped: PedIndex, targetEntity: EntityIndex, vecTargetCoorsX: number, vecTargetCoorsY: number, vecTargetCoorsZ: number): void {
	const setVehicleShootAtTarget_result = Citizen.invokeNative<void>('0xD2A388162B1121E3', ped, targetEntity, vecTargetCoorsX, vecTargetCoorsY, vecTargetCoorsZ);
	return setVehicleShootAtTarget_result;
}