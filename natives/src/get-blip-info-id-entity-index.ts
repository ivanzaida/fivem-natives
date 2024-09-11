import { BlipIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_INFO_ID_ENTITY_INDEX
 *
 * 0xA143F1936B350BD0

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blipId
 * @returns {VehicleIndex}  
 */
export function getBlipInfoIdEntityIndex(blipId: BlipIndex): VehicleIndex {
	const getBlipInfoIdEntityIndex_result = Citizen.invokeNative<VehicleIndex>('0xA143F1936B350BD0', blipId);
	return getBlipInfoIdEntityIndex_result;
}