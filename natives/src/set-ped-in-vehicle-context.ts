import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_IN_VEHICLE_CONTEXT
 *
 * 0x9E02F7BF34671713

 * Make the ped use different clipset when inside a vehicle. The appropriate clipset for the
 * seat the ped is in will be chosen from the context name
 * The contexts are defined in vehiclelayouts.meta in the <InVehicleOverrideInfos></InVehicleOverrideInfos>
 * section e.g. MISS_ARMENIAN3_FRANKLIN_TENSE
 * DON'T FORGET to stream in the new clipset before calling this
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_128, MISC::GET_HASH_KEY("MINI_PROSTITUTE_LOW_PASSENGER"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_128, MISC::GET_HASH_KEY("MINI_PROSTITUTE_LOW_RESTRICTED_PASSENGER"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_3212, MISC::GET_HASH_KEY("MISS_FAMILY1_JIMMY_SIT"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_3212, MISC::GET_HASH_KEY("MISS_FAMILY1_JIMMY_SIT_REAR"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_95, MISC::GET_HASH_KEY("MISS_FAMILY2_JIMMY_BICYCLE"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(num3, MISC::GET_HASH_KEY("MISSFBI2_MICHAEL_DRIVEBY"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("MISS_ARMENIAN3_FRANKLIN_TENSE"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("MISSFBI5_TREVOR_DRIVING"));
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} inVehicleContextHash
 */
export function setPedInVehicleContext(ped: PedIndex, inVehicleContextHash: number): void {
	const setPedInVehicleContext_result = Citizen.invokeNative<void>('0x9E02F7BF34671713', ped, inVehicleContextHash);
	return setPedInVehicleContext_result;
}