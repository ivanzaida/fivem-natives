/**
 * CFX:OVERRIDE_REACTION_TO_VEHICLE_SIREN
 *
 * 0x3F3EB3F7

 * Setting the state to true and a value between 0 and 2 will cause pedestrian vehicles to react accordingly to sirens.```cenum Reactions {Left = 0,Right = 1,Stop = 2}```
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state Toggle on or off
 * @param {number} reaction Decide how they should react
 */
export function overrideReactionToVehicleSiren(state: boolean, reaction: number): void {
	const overrideReactionToVehicleSiren_result = Citizen.invokeNative<void>('0x3F3EB3F7', state, reaction);
	return overrideReactionToVehicleSiren_result;
}