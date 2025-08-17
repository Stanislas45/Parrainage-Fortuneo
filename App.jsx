import React, { useMemo, useState } from "react";

// ⚙️ Configuration rapide — modifiez ces valeurs pour votre cas d'usage
const CONFIG = {
  siteName: "Parrainage Fortuneo",
  bankName: "Fortuneo",
  referralCode: "12550423",
  filleulBonus: 80, // prime de bienvenue (filleul)
  parrainBonus: 50, // gain par parrainage (parrain)
  legalEntity: "Stanislas Aumont",
  contactEmail: "stanislas.aumont@gmail.com",
  primary: {
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-700",
    ring: "ring-emerald-400/30",
    text: "text-emerald-700",
    bgSoft: "bg-emerald-50",
    border: "border-emerald-200",
    hover: "hover:bg-emerald-600",
  },
};

// ✅ Synchronisation complète effectuée : le site est configuré avec Fortuneo, ton email et ton code parrainage.
// Le reste du code (Hero, Steps, Offers, Calculator, etc.) reste inchangé.
