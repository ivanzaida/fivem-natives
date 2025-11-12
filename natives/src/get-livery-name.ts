import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_LIVERY_NAME
 *
 * 0x48C57B247498FD02

 * 
 * Returns the text label of the vehicle's liveryIndex, as specified by the liveryNames section of the vehicle's modkit data in the carcols file.
 * 
 * example
 * 
 * int count = VEHICLE::GET_VEHICLE_LIVERY_COUNT(veh);
 * for (int i = 0; i < count; i++)
 *   {
 *      const char LiveryName = VEHICLE::GET_LIVERY_NAME(veh, i);
 *   }
 * 
 * 
 * this example will work fine to fetch all names
 * for example for Sanchez we get
 * 
 * SANC_LV1
 * SANC_LV2
 * SANC_LV3
 * SANC_LV4
 * SANC_LV5
 * 
 * 
 * Use GET_FILENAME_FOR_AUDIO_CONVERSATION, to get the localized livery name.
 * 
 * Full list of vehicle mod kits and mods by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleModKits.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} livery
 * @returns {string}  
 */
export function getLiveryName(vehicle: VehicleIndex, livery: number): string {
	const getLiveryName_result = Citizen.invokeNative<string>('0x48C57B247498FD02', vehicle, livery);
	return getLiveryName_result;
}