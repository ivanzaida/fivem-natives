import { PopzoneId, PopscheduleId } from '@ivanzaida/structures'

/**
 * ZONE:GET_ZONE_POPSCHEDULE
 *
 * 0xC6B8DAA3EC313D8F

 * 
 * ------------------------------------------------------------------
 * @param {PopzoneId} zoneId
 * @returns {PopscheduleId}  
 */
export function getZonePopschedule(zoneId: PopzoneId): PopscheduleId {
	const getZonePopschedule_result = Citizen.invokeNative<PopscheduleId>('0xC6B8DAA3EC313D8F', zoneId);
	return getZonePopschedule_result;
}