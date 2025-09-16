export type Doc = {
  id: number;
  title: string;
  url: string;
};

export type ExpandedSections = {
  mathematics1: boolean;
  mathematics2: boolean;
  mathematics3: boolean;
  mathematics4: boolean;
  mathematics5: boolean;
  mathematics6: boolean;
  mathematics7: boolean;
  mathematics8: boolean;
  structuralengineering: boolean;
};

export const documents: {
  mathematics1: Doc[];
  mathematics2: Doc[];
  mathematics3: Doc[];
  mathematics4: Doc[];
  mathematics5: Doc[];
  mathematics6: Doc[];
  mathematics7: Doc[];
  mathematics8: Doc[];
  structuralengineering: Doc[];
} = {
  structuralengineering: [
    {
      id: 1,
      title: "CVEN2002 Engineering Computations Notes",
      url: "Notes/Civil Engineering/CVEN2002 Engineering Computations Notes.pdf",
    },
    {
      id: 2,
      title: "CVEN2400 Mechanics of Solids Notes",
      url: "Notes/Civil Engineering/CVEN2400 Mechanics of Solids Notes.pdf",
    },
  ],
  mathematics1: [
    {
      id: 1,
      title: "HWA101 Fractions and ratios",
      url: "Notes/Math Olympiad/2021-Entry-Alge-Euclidiad/HWA101-Fractions-and-ratios.pdf",
    },
    {
      id: 2,
      title: "HWA102 Percentages",
      url: "Notes/Math Olympiad/2021-Entry-Alge-Euclidiad/HWA102-Percentages.pdf",
    },
    {
      id: 3,
      title: "HWA103 Rates",
      url: "Notes/Math Olympiad/2021-Entry-Alge-Euclidiad/HWA103-Rates.pdf",
    },
    {
      id: 4,
      title: "HWA104 Speeds",
      url: "Notes/Math Olympiad/2021-Entry-Alge-Euclidiad/HWA104-Speeds.pdf",
    },
    {
      id: 5,
      title: "HWA105 Systems of Linear Equations",
      url: "Notes/Math Olympiad/2021-Entry-Alge-Euclidiad/HWA105-Systems-of-Linear-Equations.pdf",
    },
    {
      id: 6,
      title: "HWA106 Factorization Formulae of Polynomial Expressions",
      url: "Notes/Math Olympiad/2021-Entry-Alge-Euclidiad/HWA106-Factorization-Formulae-of-Polynomial-Expressions.pdf",
    },
    {
      id: 7,
      title: "HWA107 Arithmetic Progressions and Sums of Squares and Cubes",
      url: "Notes/Math Olympiad/2021-Entry-Alge-Euclidiad/HWA107-Arithmetic-Progressions-and-Sums-of-Squares-and-Cubes.pdf",
    },
    {
      id: 8,
      title: "Tricks in Multiplication",
      url: "Notes/Math Olympiad/2021-Entry-Alge-Euclidiad/Tricks-in-Multiplication.pdf",
    },
  ],

  mathematics2: [
    {
      id: 9,
      title: "HWN101 Prime Factorization and Divisor Problems",
      url: "Notes/Math Olympiad/2021-Entry-NT-Euclidiad/HWN101-Prime-Factorization-and-Divisor-Problems.pdf",
    },
    {
      id: 10,
      title: "HWN102 GCD and LCM",
      url: "Notes/Math Olympiad/2021-Entry-NT-Euclidiad/HWN102-GCD-and-LCM.pdf",
    },
    {
      id: 11,
      title: "HWN103 Divisibility",
      url: "Notes/Math Olympiad/2021-Entry-NT-Euclidiad/HWN103-Divisibility.pdf",
    },
  ],

  mathematics3: [
    {
      id: 12,
      title: "Final Test",
      url: "Notes/Math Olympiad/2022-Entry-NT-Euclidiad/Final-Test.pdf",
    },
    {
      id: 13,
      title: "HW1 Prime Factorization",
      url: "Notes/Math Olympiad/2022-Entry-NT-Euclidiad/HW1-Prime-Factorization.pdf",
    },
    {
      id: 14,
      title: "HW2 GCD and LCM",
      url: "Notes/Math Olympiad/2022-Entry-NT-Euclidiad/HW2-GCD-and-LCM.pdf",
    },
    {
      id: 15,
      title: "HW3 Digits and Poly Division",
      url: "Notes/Math Olympiad/2022-Entry-NT-Euclidiad/HW3-Digits-and-Poly-Division.pdf",
    },
    {
      id: 16,
      title: "HW4 Modular Arithmetic I",
      url: "Notes/Math Olympiad/2022-Entry-NT-Euclidiad/HW4-Modular-Arithmetic-I.pdf",
    },
    {
      id: 17,
      title: "HW5 Modular Arithmetic II",
      url: "Notes/Math Olympiad/2022-Entry-NT-Euclidiad/HW5-Modular-Arithmetic-II.pdf",
    },
  ],
  mathematics4: [
    {
      id: 18,
      title: "15-IMO (Shortlisted) NT Problems from 2023 MMR IMO Team Training",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/15-IMO-(Shortlisted)-NT-Problems-from-2023-MMR-IMO-Team-Training.pdf",
    },
    {
      id: 19,
      title: "2023 IMO NT Training Course Outline",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/2023-IMO-NT-Training-Course-Outline.pdf",
    },
    {
      id: 20,
      title: "2023 IMO Training Class Number Theory Revision Notes",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/2023-IMO-Training-Class-Number-Theory-Revision-Notes.pdf",
    },
    {
      id: 21,
      title: "NTL1 Euclidean and Division Algorithm",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTL1 Euclidean and Division Algorithm.pdf",
    },
    {
      id: 22,
      title: "NTL2 Bezout's Identity, Fundamental Theorem of Arithmetic",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTL2 Bezout's Identity, Fundamental Theorem of Arithmetic.pdf",
    },
    {
      id: 23,
      title: "NTL3 Modular Arithmetic",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTL3 Modular Arithmetic.pdf",
    },
    {
      id: 24,
      title: "NTL4 Order, Arithmetic Functions",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTL4 Order, Arithmetic Functions.pdf",
    },
    {
      id: 25,
      title: "NTL5 p-adic Valuation",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTL5 p-adic Valuation.pdf",
    },
    {
      id: 26,
      title: "NTL6 Lifting the Exponent",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTL6 Lifting the Exponent.pdf",
    },
    {
      id: 27,
      title: "NTL7 Diophantine Equations (1)",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTL7 Diophantine Equations (1).pdf",
    },
    {
      id: 28,
      title: "NTL8 Diophantine Equations (2)",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTL8 Diophantine Equations (2).pdf",
    },
    {
      id: 29,
      title: "NTP1 Euclidean and Division Algorithm",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTP1 Euclidean and Division Algorithm.pdf",
    },
    {
      id: 30,
      title: "NTP2 Bezout's Identity, Fundamental Theorem of Arithmetic",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTP2 Bezout's Identity, Fundamental Theorem of Arithmetic.pdf",
    },
    {
      id: 31,
      title: "NTP3 Modular Arithmetic",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTP3 Modular Arithmetic.pdf",
    },
    {
      id: 32,
      title: "NTP4 Order, Arithmetic Functions",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTP4 Order, Arithmetic Functions.pdf",
    },
    {
      id: 33,
      title: "NTP5 p-adic Valuation",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTP5 p-adic Valuation.pdf",
    },
    {
      id: 34,
      title: "NTR1 Euclidean and Division Algorithm",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTR1 Euclidean and Division Algorithm.pdf",
    },
    {
      id: 35,
      title: "NTR2 Bezout's Identity, Fundamental Theorem of Arithmetic",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTR2 Bezout's Identity, Fundamental Theorem of Arithmetic.pdf",
    },
    {
      id: 36,
      title: "NTR3 Modular Arithmetic",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTR3 Modular Arithmetic.pdf",
    },
    {
      id: 37,
      title: "NTR4 Order, Arithmetic Functions",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTR4 Order, Arithmetic Functions.pdf",
    },
    {
      id: 38,
      title: "NTR5 p-adic Valuation",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTR5 p-adic Valuation.pdf",
    },
    {
      id: 39,
      title: "NTR6 Lifting the Exponent",
      url: "Notes/Math Olympiad/2023-Advanced-NT-MSM-IMO-Training/NTR6 Lifting the Exponent.pdf",
    },
  ],
  mathematics5: [
    {
      id: 40,
      title: "2023NT1 Test",
      url: "Notes/Math Olympiad/2023-Entry-NT-Euclidiad/2023NT1_Test.pdf",
    },
    {
      id: 41,
      title: "HW101 Primes and Divisibility",
      url: "Notes/Math Olympiad/2023-Entry-NT-Euclidiad/HW101_Primes_and_Divisibiity.pdf",
    },
    {
      id: 42,
      title: "HW102 Prime Factorization and Factors",
      url: "Notes/Math Olympiad/2023-Entry-NT-Euclidiad/HW102_Prime_Factorization_and_Factors.pdf",
    },
    {
      id: 43,
      title: "HW103 GCD and LCM",
      url: "Notes/Math Olympiad/2023-Entry-NT-Euclidiad/HW103_GCD_and_LCM.pdf",
    },
    {
      id: 44,
      title: "HW104 Modular Arithmetic",
      url: "Notes/Math Olympiad/2023-Entry-NT-Euclidiad/HW104_Modular_Arithmetic.pdf",
    },
  ],

  mathematics6: [
    {
      id: 45,
      title: "2024 IMO NT Training",
      url: "Notes/Math Olympiad/2024-Advanced-NT-MSM-IMO-Training/2024 IMO NT Training.pdf",
    },
  ],

  mathematics7: [
    {
      id: 46,
      title: "2024 Intermediate NT MSM Senior2 Training",
      url: "Notes/Math Olympiad/2024-Intermediate-NT-MSM-Senior2-Training/20231205_MSMNTCourse.pdf",
    },
  ],

  mathematics8: [
    {
      id: 47,
      title: "2025 IMO NT Training",
      url: "Notes/Math Olympiad/2025-Advanced-NT-MSM-IMO-Training/2025 IMO NT Training.pdf",
    },
  ],
};
