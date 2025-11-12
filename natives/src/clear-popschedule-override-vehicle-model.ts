import { PopscheduleId } from '@ivanzaida/structures'

/**
 * ZONE:CLEAR_POPSCHEDULE_OVERRIDE_VEHICLE_MODEL
 *
 * 0x2E538CBB8683618E

 * 
 * Only used once in the decompiled scripts. Seems to be related to scripted vehicle generators.
 * 
 * Modified example from "am_imp_exp.c4", line 6418:
 * / popSchedules[0] = ZONE::GET_ZONE_POPSCHEDULE(ZONE::GET_ZONE_AT_COORDS(891.3, 807.9, 188.1));
 * etc.
 * /
 * STREAMING::SET_MODEL_AS_NO_LONGER_NEEDED(vehicleHash);
 * ZONE::CLEAR_POPSCHEDULE_OVERRIDE_VEHICLE_MODEL(popSchedules[index]);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PopscheduleId} schedule
 */
export function clearPopscheduleOverrideVehicleModel(schedule: PopscheduleId): void {
	const clearPopscheduleOverrideVehicleModel_result = Citizen.invokeNative<void>('0x2E538CBB8683618E', schedule);
	return clearPopscheduleOverrideVehicleModel_result;
}