export enum EFiringType {
	Default, // Some of these don't translate to firing patterns so we'll just not use those ones
	OneBurst = 0, // Uses FIRING_TYPE_DEFAULT as it's no longer a valid type
	OneThenAim = 1566631136, // Fire 1 bullet then aim for the duration
	RandomBursts = -687903391, // Fire random bursts for the time, can change the frequency using SET_PED_SHOOT_RATE
	Clip = 0, // Uses FIRING_TYPE_DEFAULT as it's no longer a valid type
	Continuous = -957453492, // Fires at the maximum rate for the duration, reloading if the clips empty
}