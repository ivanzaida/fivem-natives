import { EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_VERTICAL_FLIGHT_MODE_TRANSITION
 *
 * 0xF9FC9D29B8DD92DF

 * 
 * True stops vtols from switching modes. Doesn't stop the sound though.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} plane
 * @param {boolean} disableTransition
 */
export function setDisableVerticalFlightModeTransition(plane: EntityIndex, disableTransition: boolean): void {
	const setDisableVerticalFlightModeTransition_result = Citizen.invokeNative<void>('0xF9FC9D29B8DD92DF', plane, disableTransition);
	return setDisableVerticalFlightModeTransition_result;
}