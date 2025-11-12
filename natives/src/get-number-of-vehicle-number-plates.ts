/**
 * VEHICLE:GET_NUMBER_OF_VEHICLE_NUMBER_PLATES
 *
 * 0x20DE4C1439E0FC92

 * 
 * Returns the number of different license plates that have been set up by the vehicle artists and
 * can be used by SET_VEHICLE_NUMBER_PLATE_TEXT_INDEX
 * 
 * Returns the number of types of licence plates, enumerated below in SET_VEHICLE_NUMBER_PLATE_TEXT_INDEX.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumberOfVehicleNumberPlates(): number {
	const getNumberOfVehicleNumberPlates_result = Citizen.invokeNative<number>('0x20DE4C1439E0FC92', );
	return getNumberOfVehicleNumberPlates_result;
}