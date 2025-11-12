/**
 * STATS:SET_HAS_POSTED_ALL_VEHICLES_DRIVEN
 *
 * 0x8E4CE3E418A4A18A

 * 
 * Set a profile setting so that we know we already have done the post of all vehicles driven.
 * - Profile Setting is FACEBOOK_POSTED_ALL_VEHICLES_DRIVEN.
 * Retrieve current value by using GET_PROFILE_SETTING( FACEBOOK_POSTED_ALL_VEHICLES_DRIVEN )
 * If value is == 1 then we already have set the post.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setHasPostedAllVehiclesDriven(): void {
	const setHasPostedAllVehiclesDriven_result = Citizen.invokeNative<void>('0x8E4CE3E418A4A18A', );
	return setHasPostedAllVehiclesDriven_result;
}