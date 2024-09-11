import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_RADIO_STATION_INDEX
 *
 * 0X57037960

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleRadioStationIndex(vehicle: VehicleIndex): number {
	const getVehicleRadioStationIndex_result = Citizen.invokeNative<number>('0X57037960', vehicle);
	return getVehicleRadioStationIndex_result;
}