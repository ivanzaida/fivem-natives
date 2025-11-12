import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ATTACH_ENTITY_TO_CARGOBOB
 *
 * 0x129361AA74CBB732

 * 
 * Attaches an entity to a cargobob at a bone with an offset from that bone, use -1 to do an offset against the whole vehicle
 * This does not reposition the entity, please try and position the entity around 0.5m under the cargobob
 * Attaches an entity to a cargobob
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {EntityIndex} vehicle
 * @param {number} entityBone
 * @param {number} vehicleAttachPointOffsetX
 * @param {number} vehicleAttachPointOffsetY
 * @param {number} vehicleAttachPointOffsetZ
 */
export function attachEntityToCargobob(cargobob: VehicleIndex, vehicle: EntityIndex, entityBone: number, vehicleAttachPointOffsetX: number, vehicleAttachPointOffsetY: number, vehicleAttachPointOffsetZ: number): void {
	const attachEntityToCargobob_result = Citizen.invokeNative<void>('0x129361AA74CBB732', cargobob, vehicle, entityBone, vehicleAttachPointOffsetX, vehicleAttachPointOffsetY, vehicleAttachPointOffsetZ);
	return attachEntityToCargobob_result;
}