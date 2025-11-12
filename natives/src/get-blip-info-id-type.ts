import { BlipIndex, EERadarBlipType } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_INFO_ID_TYPE
 *
 * 0x6AEAF32EC173BB39

 * 
 * Returns a value based on what the blip is attached to
 * 1 - Vehicle
 * 2 - Ped
 * 3 - Object
 * 4 - Coord
 * 5 - unk
 * 6 - Pickup
 * 7 - Radius
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blipId
 * @returns {EERadarBlipType}  
 */
export function getBlipInfoIdType(blipId: BlipIndex): EERadarBlipType {
	const getBlipInfoIdType_result = Citizen.invokeNative<EERadarBlipType>('0x6AEAF32EC173BB39', blipId);
	return getBlipInfoIdType_result;
}