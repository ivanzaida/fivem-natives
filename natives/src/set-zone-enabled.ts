import { PopzoneId } from '@ivanzaida/structures'

/**
 * ZONE:SET_ZONE_ENABLED
 *
 * 0xD923766A456DE601

 * 
 * ------------------------------------------------------------------
 * @param {PopzoneId} zoneId
 * @param {boolean} enabled
 */
export function setZoneEnabled(zoneId: PopzoneId, enabled: boolean): void {
	const setZoneEnabled_result = Citizen.invokeNative<void>('0xD923766A456DE601', zoneId, enabled);
	return setZoneEnabled_result;
}