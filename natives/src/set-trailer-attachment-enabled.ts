import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TRAILER_ATTACHMENT_ENABLED
 *
 * 0x2FA2494B47FDD009

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enabled
 */
export function setTrailerAttachmentEnabled(vehicle: VehicleIndex, enabled: boolean): void {
	const setTrailerAttachmentEnabled_result = Citizen.invokeNative<void>('0x2FA2494B47FDD009', vehicle, enabled);
	return setTrailerAttachmentEnabled_result;
}