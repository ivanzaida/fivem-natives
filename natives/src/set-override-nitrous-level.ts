import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_OVERRIDE_NITROUS_LEVEL
 *
 * 0x8D6D4EB2FFE77CB3

 * 
 * Provide a set of parameters to override the vehcile's nitrous system
 * These are applied to CVehicle::m_scriptOverridesNitrous
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} override
 * @param {number} durationMod Is applied as a multiplier to the default nitrous duration (which is 3 seconds)
 * @param {number} powerMod Is applied as a multiplier to the default nitrous power multiplier (which is 3)
 * @param {number} rechargeMod Is applied as a multiplier to the default recharge rate
 * @param {boolean} disableDefaultSound
 */
export function setOverrideNitrousLevel(vehicle: VehicleIndex, override: boolean, durationMod: number = 0, powerMod: number = 0, rechargeMod: number = 0, disableDefaultSound: boolean = false): void {
	const setOverrideNitrousLevel_result = Citizen.invokeNative<void>('0x8D6D4EB2FFE77CB3', vehicle, override, durationMod, powerMod, rechargeMod, disableDefaultSound);
	return setOverrideNitrousLevel_result;
}