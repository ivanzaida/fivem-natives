import { PopscheduleId, ModelNames } from '@ivanzaida/structures'

/**
 * ZONE:OVERRIDE_POPSCHEDULE_VEHICLE_MODEL
 *
 * 0x17687E14C390C475

 * 
 * Only used once in the decompiled scripts. Seems to be related to scripted vehicle generators.
 * 
 * Modified example from "am_imp_exp.c4", line 6406:
 * / popSchedules[0] = ZONE::GET_ZONE_POPSCHEDULE(ZONE::GET_ZONE_AT_COORDS(891.3, 807.9, 188.1));
 * etc.
 * /
 * ZONE::OVERRIDE_POPSCHEDULE_VEHICLE_MODEL(popSchedules[index], vehicleHash);
 * STREAMING::REQUEST_MODEL(vehicleHash);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PopscheduleId} schedule
 * @param {ModelNames} model
 */
export function overridePopscheduleVehicleModel(schedule: PopscheduleId, model: ModelNames): void {
	const overridePopscheduleVehicleModel_result = Citizen.invokeNative<void>('0x17687E14C390C475', schedule, model);
	return overridePopscheduleVehicleModel_result;
}