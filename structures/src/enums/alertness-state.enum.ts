export enum EAlertnessState {
	AsNotAlert, // Ped hasn't received any events recently
	AsAlert, // Ped has received at least one event
	AsVeryAlert, // Ped has received multiple events
	AsMustGoToCombat, // This value basically means the ped should be in combat but isn't because he's not allowed to investigate etc
}