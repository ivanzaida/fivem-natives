import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * PED:GET_VEHICLE_PED_IS_ENTERING
 *
 * 0x31945A289F1359A1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {VehicleIndex}  
 */
export function getVehiclePedIsEntering(ped: PedIndex): VehicleIndex {
	const getVehiclePedIsEntering_result = Citizen.invokeNative<VehicleIndex>('0x31945A289F1359A1', ped);
	return getVehiclePedIsEntering_result;
}