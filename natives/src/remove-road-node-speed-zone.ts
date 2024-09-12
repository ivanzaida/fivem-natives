/**
 * VEHICLE:REMOVE_ROAD_NODE_SPEED_ZONE
 *
 * 0x1B3217FCFCCC3FCF

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {boolean}  
 */
export function removeRoadNodeSpeedZone(index: number): boolean {
	const removeRoadNodeSpeedZone_result = Citizen.invokeNative<boolean>('0x1B3217FCFCCC3FCF', index);
	return removeRoadNodeSpeedZone_result;
}