import { PopzoneId } from '@ivanzaida/structures'

/**
 * ZONE:GET_ZONE_SCUMMINESS
 *
 * 0x148523145C045769

 * 
 * cellphone range 1- 5 used for signal bar in iFruit phone
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PopzoneId} zoneId
 * @returns {number}  
 */
export function getZoneScumminess(zoneId: PopzoneId): number {
	const getZoneScumminess_result = Citizen.invokeNative<number>('0x148523145C045769', zoneId);
	return getZoneScumminess_result;
}