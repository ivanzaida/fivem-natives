import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_HORN_TYPE
 *
 * 0xDEA49773

 * This is a getter for the client-side native [`START_VEHICLE_HORN`](#_0x9C8C6504B5B63D2C), which allows you to return the horn type of the vehicle.Note: This native only gets the hash value set with `START_VEHICLE_HORN`. If a wrong hash is passed into `START_VEHICLE_HORN`, it will return this wrong hash.```cenum eHornTypes{NORMAL = 1330140148,HELDDOWN = -2087385909,AGGRESSIVE = -92810745}```
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to check the horn type.
 * @returns {number}  Returns the vehicle horn type hash, or `0` if one is not set.
 */
export function getVehicleHornType(vehicle: VehicleIndex): number {
	const getVehicleHornType_result = Citizen.invokeNative<number>('0xDEA49773', vehicle);
	return getVehicleHornType_result;
}