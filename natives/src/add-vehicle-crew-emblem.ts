import { VehicleIndex, PedIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:ADD_VEHICLE_CREW_EMBLEM
 *
 * 0x6A808266C74B0678

 * 
 * boneIndex is always chassis_dummy in the scripts. The x/y/z params are location relative to the chassis bone.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {PedIndex} ped
 * @param {number} vehicleBone
 * @param {number} offsetPosX
 * @param {number} offsetPosY
 * @param {number} offsetPosZ
 * @param {number} dirX
 * @param {number} dirY
 * @param {number} dirZ
 * @param {number} sideX
 * @param {number} sideY
 * @param {number} sideZ
 * @param {number} size
 * @param {number} badge
 * @param {number} badgeAlpha
 * @returns {boolean}  
 */
export function addVehicleCrewEmblem(vehicle: VehicleIndex, ped: PedIndex, vehicleBone: number, offsetPosX: number, offsetPosY: number, offsetPosZ: number, dirX: number, dirY: number, dirZ: number, sideX: number, sideY: number, sideZ: number, size: number, badge: number = 0, badgeAlpha: number = 200): boolean {
	const addVehicleCrewEmblem_result = Citizen.invokeNative<boolean>('0x6A808266C74B0678', vehicle, ped, vehicleBone, offsetPosX, offsetPosY, offsetPosZ, dirX, dirY, dirZ, sideX, sideY, sideZ, size, badge, badgeAlpha);
	return addVehicleCrewEmblem_result;
}