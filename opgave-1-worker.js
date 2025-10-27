let current = 2; //Først primtal(kan kun deles med 1 og sig selv)

// Tjekker om tal er primtal
function erPrimtal(tal) {
  // N parameter er current tallet
  for (let i = 2; i <= Math.sqrt(tal); i++) {
    // Test alle mulige divisorer i fra 2 op til og med kvadratroden af n
    if (tal % i === 0) return false; // går n op i i uden rest. hvis ikke, returner false.
  }
  return true;
}

// Finder primtal én efter én for evigt
function findNext() {
  if (erPrimtal(current)) {
    //erPrimtal bliver kaldt og modtager også current tal som argument (n)
    postMessage(current); // Hvis current er primtal, så send det (postMessage sender til hovedtråden)
  }
  current++; //gå videre til næste tal
  setTimeout(findNext, 0); // undgå at blokere worker helt
}

findNext();
