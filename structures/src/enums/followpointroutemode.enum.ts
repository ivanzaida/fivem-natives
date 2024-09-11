export enum EFollowpointroutemode {
	TicketSingle, // Stop at the end of the route
	TicketReturn, // Go once then return back once following the route backwards
	TicketSeason, // As above but for forever
	TicketLoop, // Treat the points as a loop, i.e follow it to the end then directly back to the first position, forever.
}