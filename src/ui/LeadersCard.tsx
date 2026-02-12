


const LeadersCard = () => {
     return (
        <div className="flex flex-col rounded-xl">
                      {/* Image div  */}
                      <div className="relative w-full h-80 rounded-t-xl bg-[url('/images/leaders/president2.jpg')] bg-cover bg-[center_20%]">

                      {/* Side Effect div  */}
                       <div className="absolute w-full h-15 bg-gradient-to-b from-transparent via-[var(--color-secondary-border)]/80 to-[var(--color-secondary-border)] bottom-0 left-0 z-20">

                       </div>

                      </div>
                       

                      {/* Info div  */}
                      <div className="w-full flex flex-col gap-1 items-center justify-center h-30 rounded-b-xl bg-[var(--color-secondary-border)]">
                            <label className="text-xs text-[var(--color-text-heading)] font-serif font-bold">Netumbo Nandi-Ndaitwah</label>
                            <label className="text-xs text-[var(--color-primaryy)] font-semibold">President</label>
                            <label className="text-xs text-[var(--color-text-muted)]">Head of State</label>
                      </div>
                 </div>
     )
}

export default LeadersCard;