import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:REMOVE_BLIP
 *
 * 0xD8C3C1CD

 * In the C++ SDK, this seems not to work-- the blip isn't removed immediately. I use it for saving cars.
 * E.g.:
 * Ped pped = PLAYER::PLAYER_PED_ID();
 * Vehicle v = PED::GET_VEHICLE_PED_IS_USING(pped);
 * Blip b = HUD::ADD_BLIP_FOR_ENTITY(v);
 * works fine.
 * But later attempting to delete it with:
 * Blip b = HUD::GET_BLIP_FROM_ENTITY(v);
 * if (HUD::DOES_BLIP_EXIST(b)) HUD::REMOVE_BLIP(&b);
 * doesn't work. And yes, doesn't work without the DOES_BLIP_EXIST check either. Also, if you attach multiple blips to the same thing (say, a vehicle), and that thing disappears, the blips randomly attach to other things (in my case, a vehicle).
 * Thus for me, HUD::REMOVE_BLIP(&b) only works if there's one blip, (in my case) the vehicle is marked as no longer needed, you drive away from it and it eventually despawns, AND there is only one blip attached to it. I never intentionally attach multiple blips but if the user saves the car, this adds a blip. Then if they delete it, it is supposed to remove the blip, but it doesn't. Then they can immediately save it again, causing another blip to re-appear.
 * -------------
 * Passing the address of the variable instead of the value works for me.
 * e.g.
 * int blip = HUD::ADD_BLIP_FOR_ENTITY(ped);
 * HUD::REMOVE_BLIP(&blip);
 * Remove blip will currently crash your game, just artificially remove the blip by setting the sprite to a id that is 'invisible'.
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} blip Blip handle to remove. [Ref]
 */
export function removeBlip(blip: IntRef /* ptr */): void {
	const removeBlip_result = Citizen.invokeNative<void>('0xD8C3C1CD', blip.dataView);
	return removeBlip_result;
}