/**
 * AUDIO:SET_POSITIONED_PLAYER_VEHICLE_RADIO_EMITTER_ENABLED
 *
 * 0x0EECA35FE21D7026

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function setPositionedPlayerVehicleRadioEmitterEnabled(enabled: boolean): void {
	const setPositionedPlayerVehicleRadioEmitterEnabled_result = Citizen.invokeNative<void>('0x0EECA35FE21D7026', enabled);
	return setPositionedPlayerVehicleRadioEmitterEnabled_result;
}