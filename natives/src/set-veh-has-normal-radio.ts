import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEH_HAS_NORMAL_RADIO
 *
 * 0x678D5CE177157549

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setVehHasNormalRadio(vehicle: VehicleIndex): void {
	const setVehHasNormalRadio_result = Citizen.invokeNative<void>('0x678D5CE177157549', vehicle);
	return setVehHasNormalRadio_result;
}